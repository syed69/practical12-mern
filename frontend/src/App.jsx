import { useEffect, useState } from "react";

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://practical12-mern.onrender.com/api/students")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Student Information</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                students.map((student) => (
                    <div key={student._id}>
                        <h2>{student.name}</h2>
                        <p>Course: {student.course}</p>
                        <p>Semester: {student.semester}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default App;