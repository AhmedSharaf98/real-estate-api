
# Real Estate API

## Description:
A RESTful API for managing real estate listings, built with NestJS, documented with Swagger, and containerized using Docker.


## Features:
- Create, retrieve, update, and delete real estate listings.
- API documentation available via Swagger.



## Running the Application:

### **Using Docker**

1. **Build the Docker Image**
   Run the following command in the root of the project directory:
	
		docker build -t real-estate-api .
2. **Run the Docker Container**

	Start the application by running:
	
		docker run -p 3000:3000 real-estate-api
3. **Access the Application**

	The application will be accessible at:

	•  **Swagger API Documentation**: [http://localhost:3000/docs](http://localhost:3000/docs)

	•  **Base URL for API Endpoints**: [http://localhost:3000](http://localhost:3000)


## API Documentation:

API Documentation is available through swagger: [http://localhost:3000/docs](http://localhost:3000/docs)