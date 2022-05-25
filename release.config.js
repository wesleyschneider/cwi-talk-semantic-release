module.exports = {
	"branches": ["main"],
	"plugins": [
		[
      "@semantic-release/npm", // Já vem instalado com "semantic-release"
      {
        "npmPublish": false,
      }
    ],
    "@semantic-release/release-notes-generator", // Já vem instalado com "semantic-release"
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md",
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": [
          "package.json",
          "CHANGELOG.md",
        ],
        "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ],
	]
};