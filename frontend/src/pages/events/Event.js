import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Col, Container, Media, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        going_count,
        going_id,
        title,
        description,
        tags,
        category,
        image,
        updated_at,
        event_date,  
        event_time,  
        city,        
        country,
        eventPage,
        setEvents,
    } = props;


    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    const handleGoing = async () => {
        try {
            const { data } = await axiosRes.post("/eventgo/", { event: id });
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? { ...event, going_count: event.going_count + 1, going_id: data.id }
                        : event;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleNotGoing = async () => {
        try {
            await axiosRes.delete(`/eventgo/${going_id}/`);
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? { ...event, going_count: event.going_count - 1, going_id: null }
                        : event;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Card className={styles.Event}>
            <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} />
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>{updated_at}</span>
                    {is_owner && eventPage && (
                        <MoreDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    )}
                </div>
            </Media>
            </Card.Body>
            {title && <Card.Text className={styles.Title}>{title}</Card.Text>}
            {description && <Card.Text className={styles.Description}>{description}</Card.Text>}
            <Link to={`/events/${id}`}>
                <Card.Img src={image} alt={description} />
            </Link>
            <Card.Body>
                <Container className="event-grid">
                    <Row>
                        <Col xs={12} md={6}>
                            {event_date && event_time && (
                                <Card.Text className={styles.EventDetail}>
                                    <i className="fa-solid fa-calendar"></i>{event_date} | {event_time}
                                </Card.Text>
                            )}
                        </Col>
                        <Col xs={12} md={6}>
                            {city && country && (
                                <Card.Text className={styles.EventDetail}>
                                    <i class="fa-solid fa-location-dot"></i>{city}, {country}
                                </Card.Text>
                            )}
                        </Col>
                    </Row>
                </Container>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                {category &&(
                                <Card.Text>
                                    <i className="fa-solid fa-users-line"></i>{category}
                                </Card.Text>
                                )}
                            </Col>
                            <Col xs={12} md={6}>
                                {tags && (
                                <Card.Text>
                                    <i className="fa-solid fa-tag"></i>{tags}
                                </Card.Text>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <div className={styles.EventBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't click going to your own event!</Tooltip>}
                        >
                            <i className="fa-solid fa-circle-check">
                                <span> {going_count} Going</span>
                            </i>
                        </OverlayTrigger>
                    ) : going_id ? (
                        <span onClick={handleNotGoing}>
                            <i className={`fa-solid fa-circle-check ${styles.Going}`}>
                                <span> {going_count} Going</span>
                            </i>
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleGoing}>
                            <i className={`fa-solid fa-circle-check ${styles.GoingOutline}`}>
                                <span> {going_count} Going</span>
                            </i>
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to click going to the event!</Tooltip>}
                        >
                            <i className="fa-solid fa-circle-check" />
                        </OverlayTrigger>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Event;