"use strict";

const aws_sdk = require("aws-sdk");
const uuid = require("uuid");
const elasticsearch = require("elasticsearch");
const axios = require("axios");

module.exports.main_function = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "Go Serverless v3.0! Your function executed successfully!",
				input: event,
        env: process.env
			},
			null,
			2
		),
	};
};
