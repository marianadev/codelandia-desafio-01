import Post from "../Post/Post";
import { Container } from "./Results.style";

const Results = () => {
  const posts = [
    {
      id: 1,
      title: "Agora é oficial: o Windows 11 está vindo",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
      date: "02 de jul, 2021",
    },
    {
      id: 2,
      title: "Tim Berners-Lee vai leiloar código-fonte da web",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
      date: "02 de jul, 2021",
    },
    {
      id: 3,
      title: "Tem Firefox novo no pedaço e você vai querer migrar",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
      date: "02 de jul, 2021",
    },
    {
      id: 4,
      title: "John McAfee, criador do antivírus McAfee, morre",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
      date: "02 de jul, 2021",
    },
  ];

  return (
    <Container>
      {!posts.length ? (
        <h1>No Posts Found.</h1>
      ) : (
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              date={post.date}
            />
          );
        })
      )}
    </Container>
  );
};
export default Results;
