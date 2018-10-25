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

### gists <=> files
* Gists must have at least one file and can have many files
* A file belongs to one gist

### gists <=> revisions
* Gists must have at least one revision and can have many revisions
* A revision belongs to one gist

### gists <=> comments
* Gist can have many comments
* A comment belongs to one gist


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

### files
* gist_id
* name*
* indent_mode {tabs, spaces} (default spaces)
* indent_size (default 2)
* line_wrap_mode {none, soft} (default soft)
* content*
* created_at*
* updated_at*

### revisions
* gist_id*
* type {created, renamed, revised}*
* file_snapshots_url*
* created_at*

### comments
* gist_id
* content
* created_at
* updated_at


## Invariants
* Must have an account to create a gist
* Gist must always have at least one file
* Can't fork own gists
* Revisions are immutable
* Line changes are immutable
* If gist is secret, hide gist from search engines
* When editing a gist, file snapshots of all files associated with gist must be taken, zipped, and stored somewhere
