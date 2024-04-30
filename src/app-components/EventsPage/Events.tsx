import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  /*CardDescription,*/
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaLocationArrow } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Events = () => {
  return (
    <>
      <div className="events ml-6">
        <p className="font-bold mt-5 mb-2 flex justify-center align-center flex space-x-4">
          Upcoming events
        </p>
        <p>
          <div className="flex items-center space-x-4">
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event1.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-xs">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-xs"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2" variant="outline">
                  Register
                </Button>
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {" "}
                        🌟 Join us for a Mocktails Mixer night! 🌟
                      </DialogTitle>
                      <DialogDescription>
                        <p className="decoration-solid">🌆Event Details:</p>
                        <p>Date:10.05.2024</p>
                        <p>Time: 6:00 PM</p>
                        <p>
                          Place:{" "}
                          <a
                            href="https://maps.app.goo.gl/aETbhYDmc12npb6W8"
                            className="decoration-solid"
                          >
                            Cafe 1920
                          </a>
                        </p>
                        <p>
                          Indulge in an evening of delightful connections,
                          laughter, and friendship as we celebrate the journey
                          of motherhood in a warm and inviting atmosphere.{" "}
                        </p>
                        <p>
                          🍹 <b>Signature Mocktails:</b> Savor the flavors of
                          three expertly crafted mocktails, each a masterpiece
                          in its own right. Choose any two of these mocktails,
                          and we've got you covered!
                        </p>
                        <p>
                          🎲 <b>Board Games:</b> Engage in friendly competition
                          with an assortment of board games for a night filled
                          with fun and shared experiences.{" "}
                        </p>
                        <br></br>
                        <p>
                          Don't miss this opportunity to connect with fellow
                          expecting mothers, share stories, and build lasting
                          friendships in a vibrant and welcoming setting.
                          Reserve your spot today and let the Mocktail Mixer at
                          Cafe 1920 be a highlight on your pregnancy journey.
                          Let's raise a glass (or a mocktail!) to the wonderful
                          adventure of motherhood! 🌸✨
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event2.jpg" style={{ height: "110px" }} />
                <CardTitle>Entertainment event - Mamma Yoga</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-xs">Yoga Vibe East</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-xs"> 6pm - 7:20pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2" variant="outline">
                  Register
                </Button>
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        🧘‍♀️ Mamma Yoga at Yoga Vibe East, Sofia! 🧘
                      </DialogTitle>
                      <DialogDescription>
                        <p className="decoration-solid">🌆Event Details:</p>
                        <p>Date: 20.06.2024</p>
                        <p>Time: 6pm - 7:20pm (workdays)</p>
                        <p>
                          Place:{" "}
                          <a
                            href="https://maps.app.goo.gl/oFoidHtEQPGwzP9M9"
                            className="decoration-solid"
                          >
                            Yoga Vibe East
                          </a>
                        </p>
                        <p>
                          Join us for an enchanting journey into relaxation and
                          well-being with our special Yoga for Pregnant Women
                          event at Yoga Vibe East.{" "}
                        </p>
                        <p>
                          ✨ Guided Yoga Session: Our experienced and nurturing
                          instructor will lead you through a specially curated
                          yoga practice designed to cater to the unique needs of
                          pregnant women. Embrace gentle poses, soothing
                          stretches, and mindful breathing techniques that
                          promote relaxation and vitality during this
                          transformative period.{" "}
                        </p>
                        <br></br>
                        <p>
                          Secure your spot now and embark on a journey of
                          mindfulness, community, and self-discovery. Namaste,
                          and see you on the mat! 🌟🤰🧘‍♀️
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>
                  Educational event - Breastfeeding Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-xs">
                    <a href="https://maps.app.goo.gl/X19xbtqD1UDf2tGJA">
                      Korner Coworking & Event space
                    </a>
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-xs"> 6pm - 7:00pm </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2" variant="outline">
                  Register
                </Button>
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        🌼 Instructor - led Breastfeeding Workshop 🌼
                      </DialogTitle>
                      <DialogDescription>
                        <p className="decoration-solid">🌆Event Details:</p>
                        <p>Date: 12.08.2024</p>
                        <p>Time: 6:00 PM - 7:00 PM</p>
                        <p>
                          Place:{" "}
                          <a
                            href="https://maps.app.goo.gl/X19xbtqD1UDf2tGJA"
                            className="decoration-solid"
                          >
                            Korner Coworking & Event Space
                          </a>
                        </p>
                        <p>
                          Embark on a nurturing journey with our exclusive
                          Breastfeeding Workshop, hosted in the cozy and modern
                          atmosphere of Korner Coworking & Event Space. Designed
                          to empower and support mothers, this workshop promises
                          to provide valuable insights into the art of
                          breastfeeding.
                        </p>
                        <p>
                          ✨ Instructor-led Training: An experienced and
                          compassionate instructor will guide attendees through
                          the essentials of breastfeeding, addressing common
                          concerns, sharing helpful techniques.{" "}
                        </p>
                        <p>
                          🌟 Team Support: Our dedicated team will be present to
                          ensure that every participant feels welcome,
                          comfortable, and well-supported throughout the
                          workshop.
                        </p>
                        <br></br>
                        <p>
                          Secure your spot today for an evening of education,
                          empowerment, and community building. We look forward
                          to welcoming you. 🤱💕
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </p>
        <br></br>

        <p>
          <div className="flex items-center space-x-4">
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-xs">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-xs"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2" variant="outline">
                  Register
                </Button>
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-xs">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-xs"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2" variant="outline">
                  Register
                </Button>
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-xs">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-xs"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2" variant="outline">
                  Register
                </Button>
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </p>
      </div>
      <div className="flex justify-center align-center mt-2">
        <Button variant="outline">See more</Button>
      </div>
    </>
  );
};

export default Events;
