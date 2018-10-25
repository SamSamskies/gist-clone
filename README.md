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
### Users <=> Gists
* Users can have many gists
* A gist belongs to one user

### Gists <=> Files
* Gists must have at least one file and can have many files
* A file belongs to one gist

### Gists <=> Revisions
* Gists must have at least one revision and can have many revisions
* A revision belongs to one gist

### Revisions <=> Line Changes
* Revisions can have many line changes
* Line changes belong to one revision

### Files <=> Line Changes
* Files can have many line changes
* line changes belong to one file

### Gists <=> Comments
* Gist can have many comments
* A comment belongs to one gist


## Attributes
### Users
* username*
* password* 
* email*
* created_at*
* updated_at*

### Gists
* user_id*
* forked_from_gist_id 
* description
* num_stars (default 0)
* is_secret (default false)
* created at*
* updated at*

### Files
* gist_id
* name*
* indent_mode {tabs, spaces} (default spaces)
* indent_size (default 2)
* line_wrap_mode {none, soft} (default soft)
* content*
* created_at*
* updated_at*

### Revisions
* gist_id*
* type {created, renamed, revised}*
* old_filename (used only when renaming)
* new_filename (used only when renaming)
* created_at*

### Line Changes
* revision_id*
* file_id*
* line_num*
* type {addition, deletion}*
* content
* created_at
* updated_at

### Comments
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
* When user deletes file from gist, relationship between gist and file is removed, but file record is not deleted
