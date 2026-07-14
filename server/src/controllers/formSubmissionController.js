import express from 'express';
import binQuery from '../services/binQuery.js';
import { XMLParser } from 'fast-xml-parser';

export async function formSubmission(req, res){
    const cardNumber = req.body.card_number;

    const responseData = await binQuery(cardNumber);
    
    const parser = new XMLParser({ ignoreAttributes: false });
    const jsonObject = parser.parse(responseData);

    console.log(jsonObject);
    console.log(jsonObject.EnhancedBINQueryResponse.Response.ExpressResponseMessage)
    console.log(jsonObject.EnhancedBINQueryResponse.Response.EnhancedBIN);

    if(!jsonObject.EnhancedBINQueryResponse.Response.EnhancedBIN){
        const error = jsonObject.EnhancedBINQueryResponse.Response.ExpressResponseMessage;
        return res.json(error);
    };

    return res.json(jsonObject.EnhancedBINQueryResponse.Response.EnhancedBIN);
};