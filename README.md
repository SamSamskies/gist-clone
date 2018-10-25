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
- [ ] fork gist
- [ ] download gist
- [ ] comment on gist
- [ ] edit comment
- [ ] delete comment
- [ ] view summaries of all gists
- [ ] view summaries of all forked gists
- [ ] view all starred gists


# Logical model
## Entities
* Users
* Gists
* Files
* Revisions
* Changes
* Comments

## Relationships
### users <=> gists
* Users can have many gists
* A gist belongs to one user

### gists <=> comments
* Gist can have many comments
* A comment belongs to one gist

### gists <=> revisions
* Gists must have at least one revision and can have many revisions
* A revision belongs to one gist

### revisions <=> files
* Revisions must have at least one file and can have many files
* A file belongs to one revision


## Attributes
### users
* username*
* password* 
* email*
* created_at*
* updated_at*

### gists
* user_id*
* forked_from_gist_id 
* description
* num_stars (default 0)
* is_secret (default false)
* created at*
* updated at*

### comments
* gist_id
* content
* created_at
* updated_at

### revisions
* gist_id*
* type {created, renamed, revised}*
* created_at*

### files
* revision_id
* name*
* content*
* created_at*
* updated_at*


## Invariants
* Must have an account to create a gist
* Gist must always have at least one revision
* Can't fork own gists
* Revisions are immutable
* Files are immutable
* If gist is secret, hide gist from search engines
* Revision type "renamed" is only change is renaming one file
* If more than one change made including just renaming multiple files, that considered a Revision with type "revised"
