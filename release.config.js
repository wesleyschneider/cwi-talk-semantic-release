module.exports = {
	"branches": ["main", "gitmoji"],
	"plugins": [
    [
      "semantic-release-gitmoji",
      {
        "releaseRules": {
          "major": [":boom:"],
          "minor": [":sparkles:"],
          "patch": [
            ":bug:",
            ":ambulance:",
            ":lock:"
          ]
        }
      }
    ],
		[
      "@semantic-release/npm",
      {
        "npmPublish": false,
      }
    ],
		"@semantic-release/release-notes-generator",
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
        "message": "🔖 ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ]
	]
};