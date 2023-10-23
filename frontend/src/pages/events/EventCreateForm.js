import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/useRedirect";

import Upload from "../../assets/upload.jpeg";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


const EVENT_CATEGORIES = [
    ["Climate Rally", "Climate Rally"],
    ["tree_planting", "Tree Planting"],
    ["green_workshop", "Green Workshop"],
    ["Sustainability Talk", "Sustainability Talk"],
    ["eco_fair", "Eco Fair"],
    ["clean_energy", "Clean Energy"],
    ["environmental_cleanup", "Environmental Cleanup"],
    ["other", "Other"],
];

function EventCreateForm() {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
  
    const [eventData, setEventData] = useState({
      title: "",
      description: "",
      event_date: "",
      event_time: "",
      city: "",
      country: "",
      tags: "",
      category: "",
      image: "",
    });
  
    const {
      title,
      description,
      event_date,
      event_time,
      city,
      country,
      tags,
      category,
      image,
    } = eventData;
  
    const imageInput = useRef(null);
    const history = useHistory();
  
    const handleChange = (event) => {
      const value =
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
  
      setEventData({
        ...eventData,
        [event.target.name]: value,
      });
    };
  
    const handleChangeImage = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setEventData({
          ...eventData,
          image: URL.createObjectURL(event.target.files[0]),
        });
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      formData.append("title", title);
      formData.append("description", description);
      formData.append("event_date", event_date);
      formData.append("event_time", event_time);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("category", category);
      formData.append("tags", tags);
      formData.append("image", imageInput.current.files[0]);
  
      try {
        const { data } = await axiosReq.post("/events/", formData);
        history.push(`/events/${data.id}`);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Event Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                    type="date"
                    name="event_date"
                    value={event_date}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.event_date?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
                        <Form.Group>
                <Form.Label>Event Time</Form.Label>
                <Form.Control
                    type="time"
                    name="event_time"
                    value={event_time}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.event_time?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.city?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    name="country"
                    value={country}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.country?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as="select"
                    name="category"
                    value={category}
                    onChange={handleChange}
                >
                    <option value="">Select a category</option>
                    {EVENT_CATEGORIES.map((categoryOption) => (
                    <option key={categoryOption[0]} value={categoryOption[0]}>
                    {categoryOption[1]}
                    </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {errors?.category?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Tags</Form.Label>
                <Form.Control
                    type="text"
                    name="tags"
                    value={tags}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.tags?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Button
                className={`${btnStyles.Button} ${btnStyles.Green}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Green}`} type="submit">
                create
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.Button} ${btnStyles.Green} btn`}
                                            htmlFor="image-upload"
                                        >
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={Upload}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}

                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default EventCreateForm;