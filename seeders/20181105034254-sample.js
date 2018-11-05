"use strict";
const Gist = require("../models").Gist;
const Revision = require("../models").Revision;
const File = require("../models").File;

module.exports = {
  up: () => {
    const gist1 = Gist.create({ description: "test 1" }).then(
      ({ id: GistId }) =>
        Revision.create({ GistId }).then(({ id: RevisionId }) => {
          const file1 = File.create({
            RevisionId,
            name: "a.js",
            content: "a"
          });
          const file2 = File.create({
            RevisionId,
            name: "b.js",
            content: "b"
          });

          return Promise.all([file1, file2]);
        })
    );
    const gist2 = Gist.create({ description: "test 2" }).then(
      ({ id: GistId }) =>
        Revision.create({ GistId }).then(({ id: RevisionId }) => {
          const file1 = File.create({
            RevisionId,
            name: "c.js",
            content: "c"
          });
          const file2 = File.create({
            RevisionId,
            name: "d.js",
            content: "d"
          });

          return Promise.all([file1, file2]);
        })
    );
    const gist3 = Gist.create({ description: "test 3" }).then(
      ({ id: GistId }) =>
        Revision.create({ GistId }).then(({ id: RevisionId }) => {
          const file1 = File.create({
            RevisionId,
            name: "e.js",
            content: "e"
          });
          const file2 = File.create({
            RevisionId,
            name: "f.js",
            content: "f"
          });

          return Promise.all([file1, file2]);
        })
    );

    return Promise.all([gist1, gist2, gist3]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Gists", null, {});
  }
};
