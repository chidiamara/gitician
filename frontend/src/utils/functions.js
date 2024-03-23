import toast from "react-hot-toast";

export function formatMemberSince(inputDateString) {
    const options = {month: "short", day: "2-digit", year: "numeric"};
    const dateFormat = new Date(inputDateString).toLocaleDateString("en-US", options);
    return dateFormat;
}

export function formatDate(inputDateString) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const date = new Date(inputDateString);
    const day = date.getDate()
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    // This function adds ordinal suffix to day
    function getOrdinalSuffix(day) {
        if (day >= 11 && day <= 13) {
            return day + "th";
        }
        switch (day % 10) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }

    const dateFormat = `${monthName} ${getOrdinalSuffix(day)}, ${year}`;
    return dateFormat;
}

export function cloneClickHandler(repo) {
    try {
        const gitClone = `git clone ${repo.clone_url}`;
        navigator.clipboard.writeText(gitClone);
        toast.success("Repository cloned to clipboard");
    } catch (error) {
        toast.error("Failed to clone repository");
    }
}