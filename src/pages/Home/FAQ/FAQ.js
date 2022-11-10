import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div>
      <h1 className="fw-bold">Frequently Asked Questions</h1>
      <Accordion className="accordian">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Is Personal Trainig Effective</Accordion.Header>
          <Accordion.Body>
            Contrary to a common misconception, personal training isn’t only
            meant for wannabe athletes and professionals. In fact, hiring a
            personal trainer in San Diego can be extremely beneficial whether
            you’re only just starting on your fitness journey or have quite a
            bit of work out experience. Here’s why: <br></br>
            <li>
              Individualized exercise: A professional personal trainer will
              provide you with tailored advice and exercise that maximize your
              effort and time, bringing swift results.
            </li>
            <li>
              Safeworkout program: Your workout program will be carefully suited
              to your needs and goals, which makes it not only more effective,
              but also much safer.
            </li>
            <li>
              Accountability: When you work out on your own, it’s easy to miss a
              session or two. Your personal trainer will push you and keep you
              accountable, which will also boost your motivation.
            </li>
            <li>
              Variety: You’ll be less likely to reach a training plateau if you
              rely on an individual trainer, as they will bring you fresh
              exercises and variety into your fitness routine.
            </li>{" "}
            <li>
              Health boost: By customizing your workout program to your needs,
              your trainer will boost your immune system and help you find
              balance, making you healthy on both the outside and the inside.{" "}
            </li>
            <li>
              Quicker results: A personal training routine will be tailored to
              your goals and needs, which will maximize efficiency and bring you
              fantastic results in no time.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How often should you see a personal trainer?
          </Accordion.Header>
          <Accordion.Body>
            The frequency of your training sessions will largely depend on your
            specific needs and habits. For instance, if you have a significant
            weight loss goal or are exercising for a competition, you may want
            to consider attending personal training sessions at least three
            times a week. If you’re not sure how often you should train, don’t
            worry! Your personal trainer at Fit Athletic will gladly discuss
            your everyday habits and goals to help you determine the most
            beneficial pace for you. It is our goal to make our San Diego gym a
            safe and healthy place where you’ll love to go several days a week
            to boost your physical and emotional wellness.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What exactly does a personal trainer do?
          </Accordion.Header>
          <Accordion.Body>
            If you’ve never hired a personal trainer before, you may be unsure
            as to what exactly their responsibilities would be. Essentially, a
            personal training professional is someone who strives to help
            clients achieve their fitness goals, which may include everything
            from weight loss and strength training to general health management.
            <br />
            If you’re looking for expertise-based personal training in San
            Diego, Fit Athletic is a great choice. Our team is made up of
            experienced trainers who are fully committed to helping you reach
            your goals and strengthen your health through customized exercise
            and personalized advice.
            <br />
            Your first personal training session is an opportunity to get to
            know your trainer and decide if they are the right fit for you.
            Additionally, your personal trainer will use this chance to perform
            a number of initial fitness assessments that will help you track
            your progress as well as discuss your needs and long-term goals with
            you. Although the first part of your session will mostly focus on
            talking and paperwork, your San Diego personal trainer will probably
            make you sweat a bit in the second half. They’ll most likely have
            you do some basic exercises such as lunges, squats or kettlebell
            swings, just to assess your current fitness level and tailor your
            workout routine accordingly. They’ll also ask you about any injuries
            you might have had, or other medical conditions.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
