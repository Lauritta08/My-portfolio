import Card from '../stories/Card';


function Myprojects(props) {
  
  console.log('Myprojects props: ', props);

  const handleLearnMoreClick = () => {
    window.location.href = 'http://127.0.0.1:5500/index.html'; 
  };
 
  return (
    <div className='p-16 pb-24 kufam'>
      <h1>My Projects</h1>
      <Card 
          button
          buttonText="Learn more"
          imageUrl={'../src/assets/dentallab.webp'}
          onClick={handleLearnMoreClick}
          text="My first project. HTML+CSS"
          title="Dental Laboratory website"
      />

      <Card 
         imageUrl={'../src/assets/next-project-img.jpg'}
         title="My next perfect project"
      /> 

  </div>
  );

  
}



export default Myprojects