# Term 1 - Week 1: Python Basics & Flow Control

---

## 1. Homework & workshop assignments -> [`homework/`](homework/)

**What was the assignment?** Filling in the workbook on the basics of Python

**What did I hand in?**
_List the files, or link to them. Notebook exports, screenshots, scripts._
Handed in the Jupyter file

**What did I find difficult, and how did I solve it?**
Nothing, already have experience with the basics of Python through my studies

### Checklist
- [ ] My workshop / homework files are in `homework/`
- [ ] Everything runs without errors, or I explained what does not and why

---


## 2. Hackathon prototype -> [`hackathon/`](hackathon/)

> Your tool and your SDG for this hackathon are announced at the **start of Friday's class**.
> Write them down here once you know them.

**Project title:** Reloop

**My pair partner:** Nina Borutyńska

**Tool we had to use:** Lovable or Bolt.new (We used Bolt.new)

**SDG we had to address:** SDG 4 - Quality Education
Reloop supports SDG 4 – Quality Education, especially the goal of making education more accessible and equitable. Because Reloop is free to use and requires no account, payment, or subscription, it provides an additional learning resource without creating a financial barrier. This makes mathematics practice accessible to a wider group of users regardless of their background.

**What problem does it solve, and for whom?**
_Name a real, specific user. "Everyone" is not a user._ 
Mathematics is considered a difficult subject by many secondary-school students, and students may struggle to judge whether they truly understand a topic or what their current mathematical level is. Many existing practice tools are either require an account/subscription, or do not give students a quick way to test themselves at a level that matches their ability. A simple, level-based quiz was chosen over a full course or tutoring platform because it lets students test themselves instantly without committing to a longer learning path. This is especially relevant after COVID-19: according to the OECD PISA 2022 results, the average mathematics score of 15-year-olds across OECD countries fell by almost 15 points between 2018 and 2022 [1].

Reloop is therefore primarily intended for secondary-school students who want additional mathematics practice and a simple way to test their skills. Furthermore this tool can be used by anyone else who just want to practice maths, but at the end of the day this is mostly focussed towards secondary-school students. It's not intended for younger children who need step-by-step teaching, or for students who don't read English well.

[1] https://www.oecd.org/en/data/dashboards/pisa-education-and-skills.html

**What did you build?**
_Two or three sentences. What can a user actually do with it?_
Reloop is a free mathematics quiz website made with AI that has three difficulty levels: Beginner, Intermediate and Advanced, users can select a quiz from one of the 3 levels, pick one of the three topics provided per level and go through the quizzes. Once they complete a quiz they receive a score and see which questions they answered incorrectly, allowing them to identify areas that may require more practice.  The website requires no account, payment or subscription and has a simple interface so users can start practising almost immediately.

**Link to the live thing (if any):**
_Deployed URL, workflow export, video demo - whatever proves it works._
https://reloop-math-fro-mch2.bolt.host/

**How do I run it?**
_Short instructions so someone else can start it._
Using the link: https://reloop-math-fro-mch2.bolt.host/

**Who did what?**
_Be honest about the split of work between you and your partner._ 
We both worked on the website itself through Bolt.new and the presentation. Then I did the README and Nina did the Ethical Reflection

**Ethical reflection - what are the risks of your tool? Who could it harm?**
_Every hackathon requires this. One honest paragraph beats three vague ones._
This ethical reflection looks at the product built during the first hackathon of the minor AI for Good. The website is a math quiz for high-school students, with three levels to practice. The app assumes a lot about its users. It needs a device and stable internet, so it excludes students without one. Everything is in English, which excludes students who don't read it well. Open answers are checked by matching the expected text, so a correct answer written differently might be marked wrong, and there's no support for screen readers, high contrast, or other accessibility needs. Students also pick their own level, assuming they can judge it accurately, and there's no help if they get stuck, just guessing or waiting for the result.
The tool could also be misused. Since the results page shows the correct answer for every wrong one, a student could type random answers just to collect the answer key instead of actually practicing, giving a false sense of understanding and possibly turning it into a homework cheat sheet. Showing a level like "Beginner" to a teacher could also make a student feel bad over just one quiz, and once AI is added, a wrong explanation could teach students something incorrect if they trust it blindly. To reduce these risks, we could accept more answer formats, add simpler language or translation, delay showing the correct answer behind an extra step, and make clear this tool is for practice, not grading.


### Checklist
- [ ] Prototype code (or export / workflow file) is in `hackathon/`
- [ ] This week's slides are in `hackathon/`
- [ ] The prototype actually runs, and I wrote down how to run it
- [ ] Ethical reflection written above

---

## 3. Presentation -> [`presentation/`](presentation/)

*Only fill this in for the week your group was selected to present. You need at least **one** of these across the whole term.*

- [ ] My group presented in this week
- [ ] Slides are in `presentation/`
- [ ] Proof of the live demo is in `presentation/` (recording, screenshots, or link)

**How did it go? What would I do differently next time?**

---

## 4. Reflection

**What is the most important thing I learned this week?**
I learned how to effectively make a plan for a big prompt to be frugal with the tokens that are given for free. Further I went more indepth about the thought process I need to have when I ask AI something to get the most effective answers from AI and thus waste less computing power from the AI/Their datacenters. Then the involvement of SDG 4 made me think more indepth about how my AI can help specific target groups, think about the pros and cons and design my website around this target group

**Where does this connect to "AI for Good"?**
_One concrete link to ethics, sustainability or social impact._
This connects to AI for Good because learning how to use tokens efficiently and ask AI effective questions can help reduce unnecessary use of resources. This makes my use of AI more sustainable and responsible. Further with the involvement with the SDG it made me think more indepth about how my AI products can help groups of people
