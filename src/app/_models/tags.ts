export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#DD0031');
    static readonly JAVA = new Tag('Java', '#007396');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#6DB33F');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#6DB33F');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#6DB33F');
    static readonly SPRINGWEB = new Tag('Spring Web', '#6DB33F');
    static readonly LOMBOK = new Tag('Lombok', '#A7B9DA');
    static readonly JPA = new Tag('JPA', '#007396');
    static readonly JDBC = new Tag('JDBC', '#007396');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#336791');
    static readonly SQL = new Tag('SQL', '#336791');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#C22D40');
    static readonly PYTHON = new Tag('Python', '#3776AB');
    static readonly FLASK = new Tag('Flask', '#000000');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4B8BBE');
    static readonly PLAYWRIGHT = new Tag('Playwright', '#2EAD33');
    static readonly SELENIUM = new Tag('Selenium Driver', '#43B02A');
    static readonly PANDAS = new Tag('Pandas', '#150458');
    static readonly DASH = new Tag('Dash', '#00BBFF');
    static readonly PLOTLY = new Tag('Plotly', '#3E4E88');
    static readonly RESTAPI = new Tag('Rest API', '#FF6F00');
    static readonly INSOMNIA = new Tag('Insomnia', '#4000BF');
    static readonly POSTMAN = new Tag('Postman', '#FF6C37');
    static readonly TYPESCRIPT = new Tag('Typescript', '#3178C6');
    static readonly JAVASCRIPT = new Tag('Javascript', '#F7DF1E');
    static readonly HTML5 = new Tag('HTML5', '#E34F26');
    static readonly CSS3 = new Tag('CSS3', '#1572B6');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#563D7C');
    static readonly PYTEST = new Tag('Pytest', '#0A9EDC');
    static readonly JUNIT = new Tag('JUnit', '#25A162');
    static readonly MOCKITO = new Tag('Mockito', '#B2B7E8');
    static readonly DOCKER = new Tag('Docker', '#2496ED');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#2496ED');
    static readonly VUEJS = new Tag('Vue.JS', '#42B883');
    static readonly HIBERNATE = new Tag('Hibernate', '#59666C');
    static readonly FASTAPI = new Tag('FastAPI', '#059669');
    static readonly SQLITE = new Tag('SQLite', '#003B57');
    static readonly PYDANTIC = new Tag('Pydantic', '#0A9EDC');

    // Ajout des tags manquants
    static readonly TALEND = new Tag('Talend', '#F80000');
    static readonly POWERBI = new Tag('Power BI', '#F2C811');
    static readonly SYBASE = new Tag('Sybase', '#1F497D');
    static readonly REACTJS = new Tag('ReactJS', '#61DAFB');
    static readonly SYMFONY = new Tag('Symfony', '#000000');
    static readonly MONGODB = new Tag('MongoDB', '#47A248');
    static readonly KUBERNETES = new Tag('Kubernetes', '#326CE5');
    static readonly CICD = new Tag('CI/CD', '#0095D5');
    static readonly AWS = new Tag('AWS', '#FF9900'); // Ajout d'AWS
    static readonly LAMBDA = new Tag('AWS Lambda', '#FF9900'); // Ajout d'AWS Lambda
    static readonly COGNITO = new Tag('AWS Cognito', '#527FFF'); // Ajout d'AWS Cognito
    static readonly APIGATEWAY = new Tag('API Gateway', '#FF4F8B'); // Ajout d'API Gateway
    static readonly RDS = new Tag('RDS', '#527FFF'); // Ajout d'AWS RDS
    static readonly REACTNATIVE = new Tag('React Native', '#61DAFB'); // Ajout de React Native

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}
