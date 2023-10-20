import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        going_count,
        going_id,
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

    const handleGoing = async () => {
        try {
            const { data } = await axiosRes.event("/eventgo/", { event: id });
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
                    {is_owner && eventPage && "..."}
                </div>
            </Media>
            </Card.Body>
            <Link to={`/events/${id}`}>
                <Card.Img src={image} alt={description} />
            </Link>
            <Card.Body>
                {description && <Card.Text>{description}</Card.Text>}
                {category && tags &&(
                    <Card.Text className={styles.CategoryTags}>
                        <i className="fa-solid fa-users-line"></i>{category} |
                        <i className="fa-solid fa-tag"></i>{tags}
                    </Card.Text>
                )}
                {event_date && event_time && (
                    <Card.Text className={styles.EventDetail}>
                        <i className="fa-solid fa-calendar"></i>{event_date} | {event_time}
                    </Card.Text>
                )}
                {city && country && (
                    <Card.Text className={styles.EventDetail}>
                        <i className="fa-solid fa-location-marker"></i>{city}, {country}
                    </Card.Text>
                )}
                <div className={styles.EventBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't click going to your own event!</Tooltip>}
                        >
                            <i className="fa-solid fa-circle-check">
                                <span> {going_count} Going</span></i>
                        </OverlayTrigger>
                    ) : going_id ? (
                        <span onClick={handleGoing}>
                            <i className={`fa-solid fa-circle-check ${styles.Going}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleNotGoing}>
                            <i className={`fa-solid fa-circle-check ${styles.GoingOutline}`} />
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