export const getUserProfAndRepos = async (req, res) => {
    const { username } = req.params;
    try {
        const userResponse = await fetch (`http://api.github.com/users/${username}`,
        {
          headers: {
            authorization: `token ${process.env.APP_GITHUB_TOKEN}`
          }
        }
        )
        const userProfile = await userResponse.json();

        const repoResponse = await fetch(userProfile.repos_url, {
          headers: {
            authorization: `token ${process.env.APP_GITHUB_TOKEN}`
          }
        });
        const repos = await repoResponse.json();

        res.status(200).json({ userProfile, repos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};