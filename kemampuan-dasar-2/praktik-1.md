# Create a folder for your project.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1
$ mkdir rhymes

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1
$ cd rhymes

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes

# To make this directory and empty Git repo do this:
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes
$ git init
Initialized empty Git repository in D:/Pratik-1/rhymes/.git/

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)

# I usually create an empty README.txt file for the first commit in my project
# history. 
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git commit -m 'First commit.'
[master (root-commit) 6bbbe2f] First commit.
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 README.txt

# Add some explanation about the project to the README file.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt

# Review uncommitted changes. Then commit them.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git commit -m 'Added project overview to README.txt'
[master 53dc493] Added project overview to README.txt
 1 file changed, 1 insertion(+)

# Alice downloads favorite rhymes.
## Pada URL yang disediakan tidak ditemukan maka saya ambil langsung dari REPOSITORYnya
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
--2021-01-18 18:01:29--  https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-18 18:01:29 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
--2021-01-18 18:02:11--  https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-18 18:02:12 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
--2021-01-18 18:03:12--  https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-18 18:03:13 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
--2021-01-18 18:08:43--  https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-18 18:08:44 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
--2021-01-18 18:09:39--  https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-18 18:09:39 ERROR 404: Not Found.

# The files have been downloaded, but not committed.
# You can see this with git status. git status
# Alice adds the files one-by-one to make her git history look nice and tidy.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git add all-around-the-mulberry-bush.txt
warning: LF will be replaced by CRLF in all-around-the-mulberry-bush.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        jack-and-jill.txt
        old-mother-hubbard.txt
        twinkle-twinkle.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
[master f2574b8] Added all-around-the-mulberry-bush.txt.
 1 file changed, 19 insertions(+)
 create mode 100644 all-around-the-mulberry-bush.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git add jack-and-jill.txt
warning: LF will be replaced by CRLF in jack-and-jill.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git commit -m 'Added jack-and-jill.txt.'
[master c505a5b] Added jack-and-jill.txt.
 1 file changed, 12 insertions(+)
 create mode 100644 jack-and-jill.txt

# Alice gets lazy and decides to just add everything else at once.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git add .
warning: LF will be replaced by CRLF in hokey-pokey.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in old-mother-hubbard.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master 9161b9e] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 3 files changed, 56 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 twinkle-twinkle.txt

# Alice reviews and admires her commit history.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git log
commit 9161b9efca127caad192557d7327f74f6c3367b5 (HEAD -> master)
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:14:17 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit c505a5b3455b43f611b5f2be37c7f0bcd5a3d433
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:12:05 2021 +0700

    Added jack-and-jill.txt.

commit f2574b8327ca0bb037e924ffdf7341986569b2ec
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:11:15 2021 +0700

    Added all-around-the-mulberry-bush.txt.

commit 53dc4934b8c5199f2ee40f59b99d71d8b8b53e36
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 17:56:17 2021 +0700

    Added project overview to README.txt

commit 6bbbe2f032b38b9eb6f45f9fd5b0b1f24cd16a44
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 17:52:02 2021 +0700

    First commit.
END

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
git log --oneline
9161b9e (HEAD -> master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
c505a5b Added jack-and-jill.txt.
f2574b8 Added all-around-the-mulberry-bush.txt.
53dc493 Added project overview to README.txt
6bbbe2f First commit.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git log -p
commit 9161b9efca127caad192557d7327f74f6c3367b5 (HEAD -> master)
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:14:17 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
+
+You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
+She went to the baker's
+To buy him some bread;
+But when she came back
+The poor dog was dead.
+
+She went to the undertaker's
+To buy him a coffin;
+But when she came back
+The poor dog was laughing.
+
+She went to the hatter's
+To buy him a hat;
+But when she came back
+He was feeding the cat.
+
+The dame made a curtsey,
+The dog made a bow;
+The dame said, "Your servant."
+The dog said, "Bow wow!"
diff --git a/twinkle-twinkle.txt b/twinkle-twinkle.txt
new file mode 100644
index 0000000..5585462
--- /dev/null
+++ b/twinkle-twinkle.txt
@@ -0,0 +1,6 @@
+Twinkle, twinkle, little star,
+How I wonder what you are.
+Up above the world so high,
+Like a diamond in the sky.
+Twinkle, twinkle, little star,
+How I wonder what you are.

commit c505a5b3455b43f611b5f2be37c7f0bcd5a3d433
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:12:05 2021 +0700

    Added jack-and-jill.txt.

diff --git a/jack-and-jill.txt b/jack-and-jill.txt
new file mode 100644
index 0000000..1596bce
--- /dev/null
+++ b/jack-and-jill.txt
@@ -0,0 +1,12 @@
+Jack and Jill
+Went up the hill
+To fetch a pail of water.
+Jack fell down
+And broke his crown
+And Jill came tumbling after.
+Up Jack got
+And home did trot
+As fast as he could caper
+Went to bed
+And plastered his head
+With vinegar and brown paper.

commit f2574b8327ca0bb037e924ffdf7341986569b2ec
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:11:15 2021 +0700

    Added all-around-the-mulberry-bush.txt.

diff --git a/all-around-the-mulberry-bush.txt b/all-around-the-mulberry-bush.txt
new file mode 100644
index 0000000..b77d989
--- /dev/null
+++ b/all-around-the-mulberry-bush.txt
@@ -0,0 +1,19 @@
+All around the mulberry bush
+The monkey chased the weasel.
+The monkey thought 'twas all in fun.
+Pop! goes the weasel.
+
+A penny for a spool of thread,
+A penny for a needle.
+That's the way the money goes.
+Pop! goes the weasel.
+
+Up and down the City Road,
+In and out of the Eagle,
+That's the way the money goes.
+Pop! goes the weasel.
+
+Half a pound of tuppenney rice,
+Half a pound of treacle,
+Mix it up and make it nice,
+Pop! goes the weasel.

commit 53dc4934b8c5199f2ee40f59b99d71d8b8b53e36
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 17:56:17 2021 +0700

    Added project overview to README.txt

diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

commit 6bbbe2f032b38b9eb6f45f9fd5b0b1f24cd16a44
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 17:52:02 2021 +0700

    First commit.

diff --git a/README.txt b/README.txt
new file mode 100644
index 0000000..e69de29

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git remote add origin https://github.com/dzakimubarok/rhymes.git

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git push -u origin master
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 8 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (17/17), 2.24 KiB | 459.00 KiB/s, done.
Total 17 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/dzakimubarok/rhymes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

# First Bob clones his fork of Alice's rhymes project.
# (If you're following along, replace bryanhirsch below with your own GitHub username.)
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2
$ git clone https://github.com/dzakimubarok/rhymes.git
Cloning into 'rhymes'...
remote: Enumerating objects: 17, done.
remote: Counting objects: 100% (17/17), done.
remote: Compressing objects: 100% (12/12), done.
remote: Total 17 (delta 2), reused 17 (delta 2), pack-reused 0
Receiving objects: 100% (17/17), done.
Resolving deltas: 100% (2/2), done.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2
$ cd rhymes

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (master)

# To keep things simple and tidy, Bob will keep the master branch in sync with Alice's version of the master branch.
# Bob creates a new branch, where he will store his changes.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (master)
$ git checkout -b hickory-dickory
Switched to a new branch 'hickory-dickory'

# Add Hickory Dickory Dock to the repo.
## Pada URL yang disediakan tidak ditemukan maka saya ambil langsung dari REPOSITORYnya
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickory)
$ wget https://www.acquia.com/sites/default/files/blog/hickory-dickory-dock.txt
--2021-01-18 18:45:14--  https://www.acquia.com/sites/default/files/blog/hickory-dickory-dock.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-18 18:45:14 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git add hickory-dickory-dock.txt
warning: LF will be replaced by CRLF in hickory-dickory-dock.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git commit -m 'Added hickory-dickory-dock.txt.'
[hickory-dickoryggg cb98f10] Added hickory-dickory-dock.txt.
 1 file changed, 5 insertions(+)
 create mode 100644 hickory-dickory-dock.txt

# Bob pushes the changes from his local copy of rhymes up to GitHub.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git push origin hickory-dickory
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'hickory-dickory' on GitHub by visiting:
remote:      https://github.com/dzakimubarok/rhymes/pull/new/hickory-dickory
remote:
To https://github.com/dzakimubarok/rhymes.git
 * [new branch]      hickory-dickory -> hickory-dickory

# Alice renames origin -> alice.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1
$ cd rhymes/

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git remote rename origin alice

# Add a remote pointing to Bob's copy of the project.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git remote add bob https://github.com/dzakimubarok/rhymes.git

# Review remotes.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git remote
alice
bob

# Confirm each remote points to the correct repository.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git remote -v
alice   https://github.com/dzakimubarok/rhymes.git (fetch)
alice   https://github.com/dzakimubarok/rhymes.git (push)
bob     https://github.com/dzakimubarok/rhymes.git (fetch)
bob     https://github.com/dzakimubarok/rhymes.git (push)

# Fetch a copy of Bob's work.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git fetch bob
From https://github.com/dzakimubarok/rhymes
 * [new branch]      hickory-dickory -> bob/hickory-dickory
 * [new branch]      master          -> bob/master

# Review all the branches (both local and remote).
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git branch -a
* master
  remotes/alice/master
  remotes/bob/hickory-dickory
  remotes/bob/master

# Check out a local copy of Bob's work and review it.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git checkout -b hickory-dickory bob/hickory-dickory
Switched to a new branch 'hickory-dickory'
Branch 'hickory-dickory' set up to track remote branch 'hickory-dickory' from 'bob'.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (hickory-dickory)
$ git diff master hickory-dickory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (hickory-dickory)
$ git log -1 -p
commit 9161b9efca127caad192557d7327f74f6c3367b5 (HEAD -> hickory-dickory, bob/master, bob/hickory-dickory, alice/master, master)
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Mon Jan 18 18:14:17 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
+
+You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
+She went to the baker's
+To buy him some bread;
+But when she came back
+The poor dog was dead.
+
+She went to the undertaker's
+To buy him a coffin;
+But when she came back
+But when she came back
+The poor dog was laughing.
+
+She went to the hatter's
+To buy him a hat;
+But when she came back
+He was feeding the cat.
+
+The dame made a curtsey,
+The dog made a bow;
+The dame said, "Your servant."
+The dog said, "Bow wow!"
diff --git a/twinkle-twinkle.txt b/twinkle-twinkle.txt
new file mode 100644
index 0000000..5585462
--- /dev/null
+++ b/twinkle-twinkle.txt
@@ -0,0 +1,6 @@
+Twinkle, twinkle, little star,
+How I wonder what you are.
+Up above the world so high,
+Like a diamond in the sky.
+Twinkle, twinkle, little star,
+How I wonder what you are.
(END)

# Checkout master and merge Bobs changes in.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (hickory-dickory)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'alice/master'.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/alice/rhymes (master)
$ ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/alice/rhymes (master)
bash: syntax error near unexpected token `('
Updating e6d8def..e6180b7
Fast-forward
 hickory-dickory-dock.txt | 5 +++++
 1 file changed, 5 insertions(+)
 create mode 100644 hickory-dickory-dock.txt

# Push changes up to GitHub git push alice master
# Remove our local copy of the hickory-dickory branch. We don't need it anymore.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Pratik-1/rhymes (master)
$ git branch -D hickory-dickory
Deleted branch hickory-dickory (was 9161b9e).


cd rhymes

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2
$ cd rhymes/

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git remote rename origin bob

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)

# Add a remote pointing to Alice's copy of the project.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git remote add alice https://github.com/dzakimubarok/rhymes.git

# Review remotes.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git remote
alice
bob

# Confirm each remote points to the correct repository. 
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git remote -v
alice   https://github.com/dzakimubarok/rhymes.git (fetch)
alice   https://github.com/dzakimubarok/rhymes.git (push)
bob     https://github.com/dzakimubarok/rhymes.git (fetch)
bob     https://github.com/dzakimubarok/rhymes.git (push)

# Update master branch. 
# (As an alternative to fetch, use `remote update` to update all your remotes.)
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git remote update
Fetching bob
Fetching alice
From https://github.com/dzakimubarok/rhymes
 * [new branch]      hickory-dickory -> alice/hickory-dickory
 * [new branch]      master          -> alice/master

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (hickory-dickoryggg)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'bob/master'.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (master)
$ git merge alice/master
Already up to date.

# To confirm you did everything right check the difference between your local copy of master 
# and Alice's master branch. There should be no difference. 
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (master)
$ git diff alice/master

# Push to GitHub 
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Praktik-1-Step-2/rhymes (master)
$ git push bob master
Everything up-to-date

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (hickory-dickory)
$ git checkout -b bobs-changes
Switched to a new branch 'bobs-changes'

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/jack-be-nimble.txt
--2021-01-19 17:26:02--  https://www.acquia.com/sites/default/files/blog/jack-be-nimble.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-19 17:26:03 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git add jack-be-nimble.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -m 'Added jack-be-nimble.txt.'
[bobs-changes 6e988cf] Added jack-be-nimble.txt.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 jack-be-nimble.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/mother-goose.txt
--2021-01-19 17:27:17--  https://www.acquia.com/sites/default/files/blog/mother-goose.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-19 17:27:18 ERROR 404: Not Found.


ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git add mother-goose.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -m 'Added mother-goose.txt.'
[bobs-changes 53c942e] Added mother-goose.txt.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 mother-goose.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes cde9f58] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

# Review changes word-by-word. Commit.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git diff --word-diff
diff --git a/README.txt b/README.txt
index 94ae9b6..839a72d 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1 @@
This repo is a collection of Alice's favorite nursery rhymes. Pull [-reqests-]{+requests+} accepted.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -am 'Fixed typo in README.txt.'
[bobs-changes a3221a2] Fixed typo in README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes 969615f] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes 707c7df] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)


ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/old-king-cole.txt
--2021-01-19 17:34:31--  https://www.acquia.com/sites/default/files/blog/old-king-cole.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-19 17:34:32 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git add old-king-cole.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -m 'Added old-king-cole.txt.'
[bobs-changes 0e24159] Added old-king-cole.txt.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 old-king-cole.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
--2021-01-19 17:35:50--  https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-19 17:35:51 ERROR 404: Not Found.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git add twinkle-twinkle.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -m 'Added twinkle-twinkle.txt.'
On branch bobs-changes
nothing to commit, working tree clean

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes 0de3165] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git log
commit 0de3165d1f794d60c82e68725edd9c972a3d7244 (HEAD -> bobs-changes)
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:37:18 2021 +0700

    Updated README.txt.

commit 0e24159326b8b86480dac7684b3fb4ed5d523821
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:35:18 2021 +0700

    Added old-king-cole.txt.

commit 707c7dfb55b3f2f83f01408bda361a20bd13d807
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:33:38 2021 +0700

    Updated README.txt.

commit 969615fcbcb997feda1976f2c6cd4df3cadbd4cf
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:32:47 2021 +0700

    Updated README.txt.

commit a3221a24123a21b7a83683839715f46460d57b0a
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:31:34 2021 +0700

    Fixed typo in README.txt.

commit cde9f587e7f78d2d7a90e9571f9a5eba65d54d4e
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:29:02 2021 +0700

    Updated README.txt.

commit 53c942efa5624464092c0afbc9255a2dbf473353
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:27:32 2021 +0700

    Added mother-goose.txt.

commit 6e988cffe0a3eb633c93b2fc8905e7e8227828a8
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 17:26:35 2021 +0700

    Added jack-be-nimble.txt.

commit e6180b72095d1d573b86cd9c46013eed7b7c8bc0 (bob/hickory-dickory, alice/hickory-dickory, hickory-dickory)
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 16:59:52 2021 +0700

    Added hickory-dickory-dock.txt.

commit e6d8deffd1d7bacbee5a26c0adc573f6827d076c (bob/master, bob/HEAD, alice/master, master)
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 16:51:09 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit c5125c5416359d816d973808d1c2cabe543437ca
Author: dzakimubarok <fauziyezaki@gmail.com>
commit c5125c5416359d816d973808d1c2cabe543437ca
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 16:50:54 2021 +0700

    Added jack-and-jill.txt.

commit ff5311ccdcda14cf3c34e43d3b9d1592be58b8d5
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 16:50:39 2021 +0700

    Added all-around-the-mulberry-bush.txt.

commit 9a699b81fdbbbd791d33a450d53e628c87e17727
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 16:46:55 2021 +0700

    Added project overview to README.txt

commit b464a2b1b448351a8e0a956d09379ad7fe37483b
Author: dzakimubarok <fauziyezaki@gmail.com>
Date:   Tue Jan 19 16:45:46 2021 +0700

    First commit
(END)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git log --oneline
0de3165 (HEAD -> bobs-changes) Updated README.txt.
0e24159 Added old-king-cole.txt.
707c7df Updated README.txt.
969615f Updated README.txt.
a3221a2 Fixed typo in README.txt.
cde9f58 Updated README.txt.
53c942e Added mother-goose.txt.
6e988cf Added jack-be-nimble.txt.
e6180b7 (bob/hickory-dickory, alice/hickory-dickory, hickory-dickory) Added hickory-dickory-dock.txt.
e6d8def (bob/master, bob/HEAD, alice/master, master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
c5125c5 Added jack-and-jill.txt.
ff5311c Added all-around-the-mulberry-bush.txt.
9a699b8 Added project overview to README.txt
b464a2b First commit

# Rewrite history going back as far as commit 4b15370.
ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git rebase -i e6180b7

pick 6e988cf Added jack-be-nimble.txt.
pick 53c942e Added mother-goose.txt.
pick cde9f58 Updated README.txt.
pick a3221a2 Fixed typo in README.txt.
pick 969615f Updated README.txt.
pick 707c7df Updated README.txt.
pick 0e24159 Added old-king-cole.txt.
pick 0de3165 Updated README.txt.

# Rebase e6180b7..0de3165 onto e6180b7 (8 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git log --oneline
549b74c (HEAD -> bobs-changes) Updated README.txt.
2a2f9ec Added old-king-cole.txt.
53c942e Added mother-goose.txt.
6e988cf Added jack-be-nimble.txt.
e6180b7 (bob/hickory-dickory, alice/hickory-dickory, hickory-dickory) Added hickory-dickory-dock.txt.
e6d8def (bob/master, bob/HEAD, alice/master, master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
c5125c5 Added jack-and-jill.txt.
ff5311c Added all-around-the-mulberry-bush.txt.
9a699b8 Added project overview to README.txt
b464a2b First commit

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/bob/rhymes (bobs-changes)
$ git push bob bobs-changes
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 1010 bytes | 252.00 KiB/s, done.
Total 10 (delta 4), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 1 local object.
remote:
remote: Create a pull request for 'bobs-changes' on GitHub by visiting:
remote:      https://github.com/dzakimubarok/rhymes/pull/new/bobs-changes
remote:
To https://github.com/dzakimubarok/rhymes.git
 * [new branch]      bobs-changes -> bobs-changes
