import "./Skills.css";

function Skills() {
    const skillList = [
        { name: "HTML", icon: "html5/html5-original.svg" },
        { name: "CSS", icon: "css3/css3-original.svg" },
        { name: "JS", icon: "javascript/javascript-original.svg" },
        { name: "Java", icon: "java/java-original.svg" },
        { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "python/python-original.svg" },
        { name: "MySQL", icon: "mysql/mysql-original.svg" },
        { name: "Spring", icon: "spring/spring-original.svg" },
    ];

    const toolList = [
        { name: "Git", icon: "git/git-original.svg" },
        { name: "VS Code", icon: "vscode/vscode-original.svg" },
        { name: "IntelliJ", icon: "intellij/intellij-original.svg" },
        { name: "Postman", icon: "postman/postman-original.svg" },
        { name: "GitHub", icon: "github/github-original.svg" },
        { name: "Maven", icon: "maven/maven-original.svg" },
        { name: "PyCharm", icon: "pycharm/pycharm-original.svg" },
        { name: "NPM", icon: "npm/npm-original-wordmark.svg" },
    ];

    return (
        <div className="skills-container">
            <section className="skill-grid">
                <div className="skill-header">
                    <h1>SKILLS</h1>
                </div>
                <div className="skill-icons">
                    {skillList.map((skill) => (
                        <div className="img-icon" key={skill.name}>
                            <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                                alt={skill.name}
                            />
                            <span className="icon-text">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="tools-grid">
                <div className="tools-header">
                    <h1>TOOLS & PLATFORM</h1>
                </div>
                <div className="tools-icon">
                    {toolList.map((tool) => (
                        <div
                            className={`img-icon ${tool.name === "GitHub" ? "github-icon" : ""}`}
                            key={tool.name}
                        >
                            <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool.icon}`}
                                alt={tool.name}
                            />
                            <span className="icon-text">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;
