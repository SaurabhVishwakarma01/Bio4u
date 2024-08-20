import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Courses.css";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Courses = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);

  const [open1, setOpen1] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  return (
    <>
      <div className="maincourse">
        <AnimatedOnScroll animationIn="bounceInLeft">
          <div className="coursediv"> COURSES</div>
        </AnimatedOnScroll>

        <div className="coursecard1">
          <AnimatedOnScroll animationIn="bounceInLeft">
            <Card sx={{ maxWidth: 300, maxHeight: 345 }} className="subcard1">
              <CardActionArea>
                <CardContent>
                  <Typography
                    id="card1head"
                    gutterBottom
                    variant="h8"
                    component="div"
                  >
                    TWO YEAR CLASSROOM TEACHING COURSE
                  </Typography>
                </CardContent>

                <CardMedia
                  className="cardimg"
                  component="img"
                  alt="courses"
                  height="140"
                  image="./assets/card1.jpg"
                />
                <CardContent>
                  <Typography
                    id="card1truncate"
                    variant="body2"
                    color="text.secondary"
                  >
                    Weekly 3 lect of 1hr 45 min Regular doubt solving session/
                    Test paper Analysis Sessions....
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button id="learnmore" onClick={handleOpen} size="small">
                  Learn More
                </Button>
              </CardActions>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modalbox" sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    TWO YEAR CLASSROOM TEACHING COURSE
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    -Weekly 3lect of 1hr 45 min -Regular doubt solving session/
                    Test paper Analysis Sessions by expert teachers -Three Round
                    of Revision + NCERT text book reading sessions - One to one
                    online doubt solving/ missed out session.
                  </Typography>
                  <CardActions>
                    <Link className="coursebtn4" to={"/normal"}>
                      <Button>
                        <span className="colorbtn4">Contact us</span>
                      </Button>
                    </Link>
                  </CardActions>
                </Box>
              </Modal>
            </Card>
          </AnimatedOnScroll>

          {/* card 2*/}
          <AnimatedOnScroll animationIn="bounceInLeft">
            <Card sx={{ maxWidth: 300, maxHeight: 345 }} className="subcard2">
              <CardActionArea>
                <CardContent>
                  <Typography
                    className="card4sub"
                    gutterBottom
                    variant="h8"
                    component="div"
                  >
                    ONE YEAR CLASSROOM TEACHING COURSE (FOR XII APPEARING
                    STUDENTS)
                  </Typography>
                </CardContent>

                <CardMedia
                  className="cardimg"
                  component="img"
                  alt="courses"
                  height="140"
                  image="./assets/card2.jpg"
                />
                <CardContent>
                  <Typography
                    id="card2truncate"
                    variant="body2"
                    color="text.secondary"
                  >
                    Weekly 3 lect of 1hr 45 min Regular doubt solving session/
                    Test paper Analysis Sessions....
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button onClick={handleOpen1} size="small">
                  <span id="learnmore">Learn more</span>
                </Button>
              </CardActions>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modalbox" sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    ONE YEAR CLASSROOM TEACHING COURSE (FOR XII APPEARING
                    STUDENTS)
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    -Weekly 3 lect of 1hr 45 min -Regular doubt solving session/
                    Test paper Analysis Sessions by expert teachers -One Round
                    of Revision + NCERT text book reading sessions -One to one
                    online doubt solving/ missed out session.
                  </Typography>
                  <CardActions>
                    <Link className="coursebtn4" to={"/normal"}>
                      <Button>
                        <span className="colorbtn4">Contact us</span>
                      </Button>
                    </Link>
                  </CardActions>
                </Box>
              </Modal>
            </Card>
          </AnimatedOnScroll>
        </div>
        {/* card 3*/}

        <div className="coursecard2">
        <AnimatedOnScroll animationIn="bounceInRight">
            <Card sx={{ maxWidth: 300, maxHeight: 345 }} className="subcard3">
              <CardActionArea>
                <CardContent>
                  <Typography
                    id="card3head"
                    gutterBottom
                    variant="h8"
                    component="div"
                  >
                    ONE YEAR CLASSROOM TEACHING COURSE (FOR NEET REPEATERS)
                  </Typography>
                </CardContent>

                <CardMedia
                  className="cardimg"
                  component="img"
                  alt="courses"
                  height="140"
                  image="./assets/card3.png"
                />
                <CardContent>
                  <Typography
                    id="card3truncate"
                    variant="body2"
                    color="text.secondary"
                  >
                    Weekly 3 lect of 1hr 45 min Regular doubt solving session/
                    Test paper Analysis Sessions....
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={handleOpen2} size="small">
                  <span id="learnmore">Learn more</span>
                </Button>
              </CardActions>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modalbox" sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    ONE YEAR CLASSROOM TEACHING COURSE (FOR NEET REPEATERS)
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    -Weekly 2/3 lect of 3.5 to 4.5 Hour -Regular doubt solving
                    session/ Test paper Analysis Sessions -One Round of Revision
                    + NCERT text book reading sessions -One to one online doubt
                    solving/ missed out session.
                  </Typography>
                  <CardActions>
                    <Link className="coursebtn4" to={"/normal"}>
                      <Button>
                        <span className="colorbtn4">Contact us</span>
                      </Button>
                    </Link>
                  </CardActions>
                </Box>
              </Modal>
            </Card>
          </AnimatedOnScroll>

          {/* card 4*/}
          <AnimatedOnScroll animationIn="bounceInRight">
            <Card sx={{ maxWidth: 300, maxHeight: 345 }} className="subcard4">
              {" "}
              <CardActionArea>
                <CardContent>
                  <Typography
                    id="card5sub"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    MASTERCLASS NEET TEST SERIES
                  </Typography>
                </CardContent>

                <CardMedia
                  className="cardimg"
                  component="img"
                  alt="courses"
                  height="140"
                  image="./assets/card4.png"
                />
                <CardContent>
                  <Typography
                    id="card4truncate"
                    variant="body2"
                    color="text.secondary"
                  >
                    -100+ NEET patt...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="learnmore">
                <Button onClick={handleOpen3} size="small">
                  <span id="learnmore">Learn more</span>
                </Button>
              </CardActions>
              <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modalbox" sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    MASTERCLASS NEET TEST SERIES
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    -100+ NEET pattern 100% NCERT based test series
                  </Typography>
                  <CardActions>
                    <Link className="coursebtn4" to={"/normal"}>
                      <Button>
                        <span className="colorbtn4">Contact us</span>
                      </Button>
                    </Link>
                  </CardActions>
                </Box>
              </Modal>
            </Card>
          </AnimatedOnScroll>
        </div>
      </div>
    </>
  );
};

export default Courses;
