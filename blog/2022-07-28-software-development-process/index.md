---
slug: software-development-process
title: My Software Development Process
authors: trout
tags: [javascript]
---

The purpose of this post is two fold:

- <u>To ground me when one of my software projects feels like it's going off the rails.</u> This article is a mental-map of my well-traversed terrain. I use it to orient and ground myself.
- <u>To set expectations with my clients.</u> This article allows me to share my mental-map with those who hire me, to better communicate how I think about their project, and how I plan to approach it.

Briefly, here are the major *phases* of my development process:
- Specification
- Prototyping
- Development
- Production
- Design

## Why I Need to Write About My Software Process

One big reason is for the sake of semantics. The software development industry is full of buzz words and jargon. What I call my 'software development process' is closer to what Wikipedia identifies as [Systems Development Life Cycle](https://en.wikipedia.org/wiki/Systems_development_life_cycle) than their article on [Software Development Process](https://en.wikipedia.org/wiki/Software_development_process). The meaning of these words are important when I'm managing junior developers or communicating with a client.

Another reason is my specialty within the software development world. I'm generally a freelancer, but sometimes I work with or manage a small team. Occasionally I will work for a large company, but that is the exception rather than the rule. I also work primarily with open source software.

These experiences have led me to diverge from the textbook examples of software development, like *Waterfall* or *Agile Scum*, which are designed for use in a conventional, large company. I wear all the hats when I work as a lone freelancer. As the team expands, I delegate the hats, but the overall process doesn't change. Even within the scope of a more rigid process like Scrum, my development process doesn't really change. The same things need to happen, regardless of what they are called. So words are important, but also not.

Finally, another big reason for me to write down my process is to provide a conceptual exit ramp for my clients. I seem to have the same conversations over-and-over with clients, around our software development process. This usually stems from bad expectations, which developed in the 90s.

In the 90s, Microsoft made a bunch of money from putting software onto disks, putting those disks into a box, and then selling the box. Anything resembling upgrades or maintenance was an opportunity to put more stuff into boxes and make more money. But software isn't like that any more, because most software today is built on top of open source code. Today, [building software is like buying a puppy](https://medium.com/@derekhat/building-software-is-like-buying-a-puppy-5931243ae31c).

## Specification

I haven't always started with writing a specification, but the more experience I gain, the more valuable this process becomes. Five years ago, I didn't have enough experience to be very good at writing specifications. That's what it takes: experience. Now that I've taken several project from conception to production, and I'm aware of common patterns in that process, I can write specifications. If you don't have that experience, it's still an important process to go through.

"Fake it till you make it" applies here. The reason is that a specification should be the first document created and the last document edited. It changes over time, as new information about the project comes to light. Version control is important though, so that everyone involved can easily look back and identify when the goal posts get moved.

The purpose of writing a specification is to get the important engineering ideas down on paper. This allows the lead developer, the money people, and everyone else to stay on the same page. Often I will break this up into two sections:
- An **Architecture** document will explain the high-level architecture.
- The **Specification** document will explain the low-level details of the data structures, file layout, and User workflow.

Here are some of the questions I try to answer with these documents:
- Who is the end user?
- What are they trying achieve with the software?
  - More specifically, what is the **problem** the User is trying to **solve** by using the software?
- What other software or network resources does this app depend on?
- What are the data structures used by the software?
- What are the major sub-components of the app and how do they work?

See my [Clean Architecture](/blog/clean-architecture) post, as it applies to this phase of the development process.

Here are examples of specifications that I've written and maintain:
- [PSF Specifications](https://github.com/Permissionless-Software-Foundation/specifications)
- [P2WDB Specification](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service/blob/master/dev-docs/specification.md)
- [bch-dex Specification](https://github.com/Permissionless-Software-Foundation/bch-dex/tree/master/dev-docs)

## Prototyping

I use the words *Prototype* and *Proof of Concept* (PoC) interchangeably. The focus of this phase is to prove that the software can actually achieve the goals set out in the Specification; not every little detail, but the major sub-components of the architecture.

Processes like *Scrum* and *Test Driven Development* (TDD) never mention this important phase of software development, because they do not apply here. In this phase I write quick and dirty code. Most of it will get thrown away or heavily refactored. The Prototyping phase is the most creative and 'fun' part of the software development process. The goal is not to write maintainable code. The outcome is binary: Can it be built or not?

This is an important phase for a few reasons:
- This phase is all about quick discovery of obstacles and potential pitfalls.
- It provides quick feedback to investors and management. If the team can't deliver, then everyone can save a lot of money, time, and emotions by identifying it as early as possible.
- While this process can be humbling, it's incredibly educational for the developers involved.

This phase revolves around the idea of the 'happy path'. The *happy path* is the path of least resistance from the Users standpoint. It the path they take from start to finish, assuming everything goes right.

That's when you know you're done with this phase of the development process. A developer (not a normal user) can create a video recording of them going through the happy path.

## Development

Finally we're at the software development phase where frameworks like [Scrum](https://www.atlassian.com/agile/scrum) and [Test Driven Development](https://tanzu.vmware.com/content/blog/why-tdd) (**TDD**) apply. This is the most well-studied part of the software development process.

This is the phase where work can be created and divvied up among team members, or not. I created this video to show how I manage this phase of work with small, remote teams:

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/YHngWbJ4Cjw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## Production

The Production phase has everything to do with maintenance. The buzzword for this phase is Continuous Integration and Continuous Delivery (CI/CD). Production is the process of iterating through this workflow:

- Identify a new issue or feature.
- Fix the issue or add the feature. This code goes into a development branch.
- Code review and QA is conducted before merging the change into production.
- Release a new version.
- Start from the beginning on the next feature or issue.

The main difference between the Development and Production phases is *sustainability*. During development, the product is not 'done', so it's not expected to generate a cash flow. In Production, there is the assumption that the software is mature and is on a trajectory to generating a cash flow. Remember, [building software is like buying a puppy](https://medium.com/@derekhat/building-software-is-like-buying-a-puppy-5931243ae31c). If you can't pay to feed your puppy (generating a cash flow), then your puppy will die from starvation.

I'm a huge fan of Test Driven Development (TDD). The Development and Production phases of software development is where TDD really shines

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/xPL84vvLwXA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## Design

Some past clients have expressed unpleasant surprise that I save the Design phase for last. Many want to start with design first, but that is a mistake. *Form follows function*. Starting with sexy graphics and visually-appealing-but-nonfunctional mock-ups is a great way to waste money and get a project stuck, in my experience.

*"Make it work, then make it fast, then make it pretty."*

I've adopted the pragmatic approach of the quote above.

- Making it *work*, means making it work *reliably*. That's the most difficult step, and one that many entrepreneurs take for granted. This is the step that is far harder and more expensive than anyone thinks it will be.

- Once reliability is achieved, it's then time to focus on the user experience. That means making it *fast*, but also *convenient*.

- Finally, and not before, it's time to think about perception and beauty. If an app does not work, it doesn't matter how sexy it looks. But an ugly app, which works reliably, will get used. And that usage can generate a cash flow. With a cash flow, all other things are possible.

I also should point out here that <u>I do not do design work</u>. If a client is insistent on having a custom visual design, I insist that they hire a designer. Visual design is not in my field of expertise, and I try to be very clear about that.

I use [Bootstrap](https://getbootstrap.com/) when building a new app. It takes care of all the visual design, and ensures that the app looks good on both a phone and a desktop. With Bootstrap, all I need to focus on is stacking blocks and making them do stuff.

## Conclusion

I've never seen anyone else present the software development process quite the way I have here. But my process is based on hard-won experience.

If you are a senior developer, or a manager of software development teams, and you'd like to reach out, contact me via [Twitter](https://twitter.com/christroutner) or [Telegram](https://t.me/bch_js_toolkit). I'm keen to learn from other's experiences and to refine my own understanding of this great art form we call software development.

If you are an entrepreneur looking for someone to help you develop your next great idea, I'm for hire! I can help you architecture your idea, find inexpensive remote developers, and manage those developers for you. [Here are the details](https://fullstack.cash/consulting).
