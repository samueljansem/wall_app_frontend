export function PostForm() {
    return (
        <section>
            <h3>Create a new post</h3>
            <form>
                <div>
                    <input type="text" name="title" />
                </div>
                <div>
                    <textarea name="body" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
