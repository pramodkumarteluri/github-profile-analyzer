const axios = require("axios");
const db = require("../config/db");

const analyzeProfile = async (req, res) => {

    try {

        const { username } = req.params;

        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        const data = response.data;

        const sql = `
        INSERT INTO github_profiles
        (
            username,
            name,
            bio,
            public_repos,
            followers,
            following,
            profile_url,
            avatar_url
        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?)

        ON DUPLICATE KEY UPDATE

        name = VALUES(name),
        bio = VALUES(bio),
        public_repos = VALUES(public_repos),
        followers = VALUES(followers),
        following = VALUES(following),
        profile_url = VALUES(profile_url),
        avatar_url = VALUES(avatar_url)
        `;

        db.query(
            sql,
            [
                data.login,
                data.name,
                data.bio,
                data.public_repos,
                data.followers,
                data.following,
                data.html_url,
                data.avatar_url
            ],

            (err, result) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: "Profile analyzed and stored successfully",
                    data
                });

            }
        );

    } catch (error) {

        res.status(500).json({
            message: "GitHub user not found"
        });

    }

};

const getAllProfiles = (req, res) => {

    const sql = "SELECT * FROM github_profiles";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

const getSingleProfile = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM github_profiles WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

module.exports = {
    analyzeProfile,
    getAllProfiles,
    getSingleProfile
};