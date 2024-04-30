import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Blogs = () => {
  return (
    <>
      <div className="events ml-6">
        <p className="font-bold mt-5 mb-2 flex justify-center align-center flex space-x-4">
          Blogs
        </p>
        <div>
          <div className="flex flex-wrap justify-center gap-4 mx-4">
            <Card className="flex-1 min-w-300px h-24rem">
              <CardHeader>
                <img
                  src="src/public/images/blog-1.jpg"
                  style={{ height: "140px" }}
                />
                <CardTitle>
                  10 Fun Activities for Pregnant Moms for All Stages of Your
                  Pregnancy
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        10 Fun Activities for Pregnant Moms for All Stages of
                        Your Pregnancy
                      </DialogTitle>
                      <DialogDescription>
                        <p>
                          If you’re pregnant, then you already know all the ups
                          and downs, the joys and challenges, and the
                          complexities that come with being pregnant. Depending
                          on how far along you are, you might be wondering if
                          you can do the activities or hobbies you used to love
                          to do. Or you might be worried about whether or not
                          it’s safe to do. The good news is that staying active
                          can still play a part in your routine, and fun outdoor
                          activities can help. If you’re a pregnant mom and sick
                          of your day-to-day routine, then keep reading to see
                          our list of fun activities to do throughout the
                          different stages of your pregnancy. While these
                          activities are considered safe, especially if you were
                          active and healthy pre-pregnancy, it’s always
                          essential to keep your healthcare provider or doctor
                          in the loop and ask any questions you may have on what
                          is safe for you and your little one.
                        </p>
                        <br />
                        <h1>Can You Still Exercise?</h1>
                        <p>
                          Yes! It is recommended by the U.S Department of Health
                          and Human Services Physical Activity Guidelines for
                          Americans that pregnant women need at least 2.5 hours
                          of moderately intense aerobic activity each week. But
                          that doesn’t mean doing it all at once! Many exercises
                          can be done throughout each trimester, as long as you
                          modify and scale back where needed as your body adapts
                          to pregnancy. That means getting clearance from your
                          doctor, staying hydrated, wearing supporting exercise
                          clothing, and making sure you aren’t becoming
                          overheated.
                        </p>
                        <br />
                        <h1>
                          What Are the Benefits of Exercising While Pregnant?
                        </h1>
                        <p>
                          According to The American College of Obstetricians and
                          Gynecologists (ACOG), exercise during pregnancy can
                          have a lot of benefits for you, such as: Lower
                          incidence of preterm birth and cesarean birth Lower
                          birth weight Not only do you and your baby have a
                          safer birth, but you can manage more discomfort such
                          as: Reduce lower back discomfort Manage symptoms of
                          stress and tension Improve postpartum recovery{" "}
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="flex-1 h-24rem mr-4 ml-4">
              <CardHeader>
                <img
                  src="src/public/images/blog-2.png"
                  style={{ height: "140px" }}
                />
                <CardTitle>
                  How to make friends when you are a new mum or pregnant
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        How to make friends when you are a new mum or pregnant
                      </DialogTitle>

                      <DialogDescription>
                        <p>
                          Having mum friends can seriously help. Here’s how to
                          meet the women who you’ll be chatting vaginas and
                          nipple chafing with in a matter of weeks (really)…
                          <br />
                          <p>
                            1. Head to baby groups Whether it’s baby sensory,
                            rhyme time, a music class or baby massage, it
                            doesn’t really matter. Check out what’s happening
                            locally. You could see which NCT’s events are going
                            on near you, like Baby Cafes, Bumps & Babies groups,
                            and Cheeky Monkeys Tea Parties. You could also
                            download some apps that’ll tell you about groups for
                            you and your baby. You’ll find that mums are almost
                            always in the same boat as you, i.e. eager to chat
                            about their milk supply, giant knickers and birth
                            stories. Suggesting a coffee or giant slice of
                            Victoria sponge after class is always a good way to
                            get to know them more too. So take a deep breath and
                            ask people whether they fancy coming along.
                          </p>
                          <br />
                          <p>
                            2. Try an app They’re like Tinder but for mum mates.
                            Apps to connect mums with each other are now a major
                            part of the new mother landscape. We know mum
                            friends are a lifeline for our post-baby mental
                            health, happiness and feelings of isolation. So you
                            can find a slew of apps that let mums find friends
                            in their area to chat to and hang out with. You’ll
                            be amazed at how easy it is to meet people, although
                            try not to compare yourself or feel bad if the
                            friendships don’t work. 3. Join an antenatal course
                            Well, though we do say it ourselves… A lot of mums
                            meet mum friends when they join an NCT antenatal
                            course or the NHS equivalent to find out more about
                            birth, labour and life with a new baby. At one of
                            your classes, you could suggest that you all form a
                            WhatsApp group to keep in touch. That way you’ll
                            have an instant network of mums with babies the same
                            age as yours and who live close by. Win.
                          </p>
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="flex-1 h-24rem mr-4 ml-1">
              <CardHeader>
                <img
                  src="src/public/images/blog-3.jpg"
                  style={{ height: "140px" }}
                />
                <CardTitle>
                  Hobbies While Pregnant: 14 New Low-Energy + Fun Ideas
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Hobbies While Pregnant: 14 New Low-Energy + Fun Ideas
                      </DialogTitle>
                      <DialogDescription>
                        <p>
                          With a jam-packed to-do list and rising stress levels,
                          a new hobby may be the last thing you want to think
                          about. We get it. You just don’t have the time. But
                          hear us out: Carving out a little time for a new hobby
                          can have multiple benefits to your physical and mental
                          health—both of which can help your baby. Besides that,
                          you only have a little free time left before you’re
                          officially a family, so you deserve to enjoy it! In
                          this post, we’re list 14 hobbies perfect to start
                          while you’re expecting.{" "}
                        </p>
                        <br />
                        <p>
                          Why to Start New Hobbies During Pregnancy There’s a
                          few reasons why starting a hobby during pregnancy can
                          be beneficial. Relaxation— Pregnancy can be a
                          stressful time. You’re having to balance your symptoms
                          with work, family life, social life and doctor’s
                          appointments. On top of that, you’re cramming to learn
                          about babies and parenting—and you can’t forget all
                          the baby supplies you need to buy and budget for.
                          While you may think the “go, go, go” mentality helps
                          you get things done, you may actually get things done
                          quicker if your brain has a moment to take a break and
                          regain energy. If you choose relaxing hobbies, it can
                          be a way to take your mind off of the daily stressors
                          so you can return to your to-do list refreshed. Less
                          stress—As we mentioned in the first point, hobbies can
                          help reduce stress—but that may also have health
                          benefits for your baby. Although the research isn’t
                          conclusive, stress hormones may cause complications
                          and affect your immune system, leading to a higher
                          risk of a uterus infection. This can cause premature
                          birth. It may also affect your baby’s brain and immune
                          system development. Those effects may extend past
                          pregnancy too. Children who had stressed out pregnant
                          mothers may be more likely to have attention problems.
                          While there’s many ways to destress, focusing on a
                          hobby you enjoy can be one of them. Nesting— In the
                          later weeks of pregnancy, you may experience what’s
                          called the nesting instinct. It’s the urge to
                          organize, clean and do things around the home before
                          the baby arrives.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
        <br></br>

        <p>
          <div className="flex flex-wrap justify-center gap-4 mx-4">
            <Card className="flex-1 min-w-300px h-24rem">
              <CardHeader>
                <img
                  src="src/public/images/blog-7.png"
                  style={{ height: "140px" }}
                />
                <CardTitle>
                  Women's experiences of social support during pregnancy: a
                  qualitative systematic review
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Women's experiences of social support during pregnancy:
                        a qualitative systematic review
                      </DialogTitle>
                      <DialogDescription>
                        <h1>Background</h1>
                        <p>
                          Social support during pregnancy can alleviate
                          emotional and physical pressures, improving the
                          well-being of mother and child. Understanding women's
                          lived experiences and perceptions of social support
                          during pregnancy is imperative to better support
                          women. This systematic review explores and synthesises
                          the qualitative research on women's experiences of
                          social support during pregnancy.
                        </p>
                        <br />
                        <h1>Methods</h1>
                        <p>
                          Databases PubMed, CINAHL, MEDLINE, APA PsycInfo and
                          Scopus were searched with no year limit. Eligible
                          studies included pregnant women or women who were up
                          to one year postpartum and were assessed on their
                          experiences of social support during pregnancy. The
                          data were synthesised using the thematic synthesis
                          approach.
                        </p>
                        <br />
                        <h1>Results</h1>
                        <p>
                          Fourteen studies were included with data from 571
                          participating women across ten countries; two studies
                          used focus groups, and 12 used interviews to collect
                          their data. Four main themes were developed ('a
                          variety of emotional support', 'tangible and
                          intangible instrumental support', 'traditional rituals
                          and spiritual support', and 'the all-encompassing
                          natal home'), and six sub-themes ('female network
                          connections', 'care and affection from the husband',
                          'dissatisfaction with relationships', 'financial
                          support from the husband and family', 'practical
                          support from family and friends', 'health information
                          support').{" "}
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="flex-1 h-24rem mr-4 ml-4">
              <CardHeader>
                <img
                  src="src/public/images/blog-5.jpeg"
                  style={{ height: "140px" }}
                />
                <CardTitle>
                  The importance of social support in pregnancy and ways to
                  connect with others
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        The importance of social support in pregnancy and ways
                        to connect with others
                      </DialogTitle>
                      <DialogDescription>
                        <h1>
                          {" "}
                          Why is social connection important in pregnancy?
                        </h1>
                        <p>
                          Pregnancy is an exciting time for many parents, but it
                          can also be a period of uncertainty and anxiety. From
                          the physical changes to the emotional rollercoaster of
                          hormones, pregnancy can bring up many unexpected
                          challenges. Having a supportive social network during
                          this time is essential for maintaining your wellbeing,
                          as it can help to reduce stress, depression, and
                          anxiety, improve physical health, and reduce the risk
                          of pregnancy and birth complications. Having support
                          around you can also help to increase your motivation
                          and drive to make healthy lifestyle changes. Feeling
                          well supported during pregnancy can offer a sense of
                          connection and belonging, as well as emotional comfort
                          and reassurance, which can help you manage any worries
                          or concerns that may arise. Having people around you
                          who have been through the same experience can also be
                          helpful when trying to adjust to your changing body,
                          as they can offer advice on how to deal with the
                          physical and emotional changes.
                        </p>
                        <br />
                        <h1>
                          What does social support in pregnancy look like?
                        </h1>
                        <p>
                          {" "}
                          Social support is likely to look different for
                          different people. For some, feeling supported might
                          mean having regular phone calls with a loved one,
                          whilst for others it might mean receiving more
                          practical support such as help with childcare, or
                          having someone prepare a meal for you when you’re low
                          on energy. Support also comes from different people.
                          It might come from family, friends, or other
                          mums-to-be, but it might also be from healthcare
                          providers such as midwives, doctors, or doulas, or
                          from antenatal support groups. There are also likely
                          to be cultural differences in the way support is
                          offered from friends and family, or the type of
                          support you might feel that you need.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="flex-1 h-24rem mr-4 ml-1">
              <CardHeader>
                <img
                  src="src/public/images/blog-6.jpg"
                  style={{ height: "140px" }}
                />
                <CardTitle>
                  Navigating Social Events During Pregnancy: A Guide to Enjoying
                  Gatherings
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Button>Learn more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Navigating Social Events During Pregnancy: A Guide to
                        Enjoying Gatherings
                      </DialogTitle>
                      <DialogDescription>
                        <p>
                          Friendships will change when you become a parent. We
                          share tips for staying in touch with old friends,
                          making new ones and having a happy social life. Many
                          parents-to-be worry that having a baby will mean
                          they’ll never go out again. While spending time with
                          friends may not be as spontaneous or frequent as
                          before – and it’s likely that you’ll have less time,
                          energy and money – it is still possible to maintain a
                          social life. Honestly. It may take a bit more
                          planning, but it can be a great time to strengthen
                          relationships with old friends and build new
                          friendships too.
                        </p>
                        <br />
                        <h1>Hitting the town… with a bump!</h1>
                        <p>
                          Many women don’t feel like going out early on in
                          pregnancy because of tiredness and sickness, but
                          usually have a renewed energy in the second trimester.
                          This can be a good time to see friends and make the
                          most of your time before a newborn arrives. You might
                          still enjoy the atmosphere and music in bars, just
                          with an earlier night at the end. You don’t need to
                          stare enviously at your mate’s Pinot Noir, with the
                          soft drinks market becoming increasingly sophisticated
                          with alcohol-free wine and spirits to supplement the
                          orange juice and soda. Some women say they notice a
                          distance with friends when they’re pregnant and no
                          longer feel part of their social circle – especially
                          if they’re the first to have a baby. Try talking to
                          your friends, as they might be assuming you don’t want
                          to go out or don’t have time because you’re pregnant
                          and busy with baby stuff. Tell them that you still
                          want to hang out and spend time together. Don’t be shy
                          about bringing the subject up. A text or email
                          reminding them of fun times you’ve had together and
                          that you’re still the same person can also help. Some
                          mums-to-be get a tentative date in the diary for a big
                          meet-up several months after baby is born – so they
                          and their friends have something to look forward to
                          while navigating the new dynamics a little one brings.
                        </p>
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
        <Button variant="outline">Load more</Button>
      </div>
    </>
  );
};

export default Blogs;
