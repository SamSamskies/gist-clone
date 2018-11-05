DISCLAIMER: If you are looking at this repo for some reason, I do not recommend using Sequelize like I did. I just wanted to try it out. I'd recommend using Knex instead.

# User stories
- [ ] signup
- [ ] login
- [ ] view summaries of all gists
- [ ] search for gist
- [ ] create gist (public/secret)
- [ ] add file to gist
- [ ] delete file from gist
- [ ] view gist
- [ ] edit gist
- [ ] delete gist
- [ ] star gist
- [ ] download gist
- [ ] view summaries of all gists
- [ ] view summaries of all forked gists
- [ ] view all starred gists


# Logical model
## Entities
* Users
* Gists
* Revisions
* Files
* Diffs


## Relationships
### users <=> gists
* Users can have many gists
* A gist belongs to one user

### gists <=> revisions
* Gists must have at least one revision and can have many revisions
* A revision belongs to one gist

### revisions <=> files
* Revisions must have at least one file and can have many files
* A file belongs to one revision

### files <=> diffs
* Files can have one diff
* A diff belongs to one file


## Attributes
### users
* username*
* password* 
* email*
* created_at*
* updated_at*

### gists
* user_id*
* description
* num_stars (default 0)
* is_secret (default false)
* created at*
* updated at*

### revisions
* gist_id*
* created_at*

### files
* revision_id*
* name*
* content*
* created_at*

### diffs
* file_id*
* content


## Invariants
* Must have an account to create a gist
* Gist must always have at least one revision
* Revisions are immutable
* Files are immutable
* Diffs are immutable
* If gist is secret, hide gist from search engines
