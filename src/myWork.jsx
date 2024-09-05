import propTypes from "prop-types";

function myWork(props){
    // const workLists = ["Web Developmtnt", "Java Development", "C++", "Python"];
    // workLists.sort();
    // const workItems = workLists.map(list => <li>{list}</li>)

    // const workLists = [ {id: 1, name: "Web Developmtnt", skill: "70%"}, 
    //                     {id: 2, name: "Java", skill: "55%"}, 
    //                     {id: 3, name: "C++", skill: "75%"}, 
    //                     {id: 4, name: "DSA", skill: "80%"},
    //                     {id: 5, name: "Networking", skill: "50%"},
    //                     {id: 6, name: "React", skill: "Scratch"},
    //                     {id: 7, name: "Python", skill: "60%"}];


    // workLists.sort((a, b) => a.name.localeCompare(b.name));//Alphabetical
    // workLists.sort((a, b) => b.name.localeCompare(a.name));//Reverse Alphabetical
    const styles = {
        color: "red",
        marginLeft: '20px'
    }

    const st = {
            fontSize: "20px",
            marginLeft: "20%",
    }
    
    const items = props.Lists;
    const category = props.category;

    const Items =   items.map(list => <li style={st} 
                        key={list.id} >{list.name}:
                        <b style={styles}>{list.skill}</b></li>)

    return(
    <>
    <h3>{category}</h3>
    <ol>{Items}</ol>
    </>);
}

myWork.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number,
                                            name: propTypes.string,
                                            skill: propTypes.number})),
}
export default myWork;