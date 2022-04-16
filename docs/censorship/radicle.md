---
sidebar_position: 2
---

# Radicle

[Radicle](https://radicle.xyz/) is a peer-to-peer (p2p) substitute for GitHub. [Git](https://git-scm.com/) is the defacto standard for software development. [GitHub](https://github.com) has become the worlds largest Git repository for code collaboration. GitHub was purchased by Microsoft in 2018, and since that time, censorship of code repositories has been steadily increasing. Cryptocurrency developers (such as myself) will most likely be censored on GitHub if cryptocurrency gains enough mainstream adoption to threaten the US dollar. Radicle is a solution to this future problem.

Any professional who works with Git, will be familiar with the `git` command line interface (CLI). Radicle recently released their own `radicle-cli` CLI that compliments the `git` CLI.

<iframe width="731" height="411" src="https://www.youtube.com/embed/9YWN5G_FwNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Getting Started
Radicle has a [getting started guide](https://radicle.network/get-started.html) that introduces the radicle CLI and formaly documents the demo in the video above. The project is still very new and things are constantly changeing and breaking.

### Stumbling Blocks
I hit a few snags trying to set up my own development environment. Here are links to the problems and solutions I faced:

- [Error installing radicle-cli on Ubuntu](https://github.com/radicle-dev/radicle-cli/issues/64)

I also needed to upgrade the version of `git` that shipped with Ubuntu. Here's how I was able to do that ([source](https://unix.stackexchange.com/questions/33617/how-can-i-update-to-a-newer-version-of-git-using-apt-get)):

```bash
sudo apt remove git -y
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
git --version
```

## Seed Nodes
Seed nodes are *always-on* 'servers' that host git repositories. These replace the cloud hosting that GitHub provides. Docker containers for running a seed node are available in the radicle-client-services repo below:
 - [radicle-clinet-services on GitHub]( https://github.com/radicle-dev/radicle-client-services)
 - [radicle-client-services on Radicle](https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkk9c4zt9thuxhwi1ukxqcrs5tmhbtcsony/tree/a19cdcb846a8360d8f55c10aac8175368881a6ee)
