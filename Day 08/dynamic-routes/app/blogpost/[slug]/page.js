export default function Page({ params }) {
    throw new Error("error is there")
    // fetch blog using its slug
    let languages = ["python", "javascript", "c", "cpp", "cs"];
    if (languages.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    }
    else {
        return <div>Post not found</div>
    }
}