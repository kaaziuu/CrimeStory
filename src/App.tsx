const App = () => {
    console.log(import.meta);
    return <div>{import.meta.env.CRIME_STORY_API_URL}</div>;
};

export default App;
