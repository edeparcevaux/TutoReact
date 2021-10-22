import React, {useState} from 'react';
import axios from "axios";
import DeleteArticle from "./DeleteArticle";

const Articles = ({articles}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editContent, setEditContent] = useState("")

    const dateParser = (date) =>
    {
        return new Date(date).toLocaleDateString('fr-FR', {
            month : "long",
            year : "numeric",
            day : "numeric",
            hour: "numeric",
            minute: "numeric"
        });
    }

    const handleEdit = () => {
        const data = {
            author: articles.author,
            date: articles.date,
            content: editContent ? editContent : articles.content,
        }
        axios.put('http://localhost:3003/articles/' + articles.id, data).then(()=>{setIsEditing(false); })





    }
    return (
        <div className="article" style={{background: isEditing ? "#f3feff" : "white"}}>
            <div className="card-header">
                <h3>{articles.author}</h3>
                <em>Posté le {dateParser(articles.date)}</em>

            </div>
            {isEditing ? (
                <textarea onChange={(e) => setEditContent(e.target.value)}
                          autoFocus
                          defaultValue={editContent ? editContent : articles.content }>
                </textarea>
            ) : (
            <p>
                {editContent ? editContent : articles.content }
            </p> )}
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                ) :  <button onClick={() => setIsEditing(true)}>Edit</button> }

                <DeleteArticle id={articles.id}/>
            </div>
        </div>
    );
};

export default Articles;