/*
MIT License

Copyright (c) 2019 - 2022 Lilly Rose Berner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Environment, HTTPError } from "../..";

export const onRequestGet: PagesFunction<Environment> = async ({ params, env }) => {

  //const toSend = await params.text();

  const keyEncoded = decodeURIComponent(`${params.id}`);
  
  const content = await env.COUNTS.get(keyEncoded);

  if (content) {
    const headers = {
      "Content-Type": "text/plain; charset=UTF-8",
    };
    return new Response(content, { headers, status: 200 });
  }

  throw new HTTPError(404, toSend);
};









// Post the +1 on the value

export const onRequestPost: PagesFunction<Environment> = async ({ params, env }) => {
 // const length = Number(request.headers.get("Content-Length") || 0);

 // if (!length) {
 //   throw new HTTPError(400, "Content error");
 // }

// Cloudflare KV database max size of key is 512 bytes.
//  if (length > 512) {
//    throw new HTTPError(400, `Error`);
//  }

//const key = await request.text();

  // remember, make the new variable for the new database. I'll name it COUNTS.

// is this database transaction system not atomic/ACID?

// do a fresh get?

const key = decodeURIComponent(`${params.id}`);
  
  var content = await env.COUNTS.get(key);

  var contentNew = Number(content);

  contentNew += 1;

  var contentNewNew = String(contentNew);

  await env.COUNTS.put(key, contentNewNew);

  // do a get to get the value

//  await env.COUNTS.put(content, `${id}`);

//  const domain = new URL(request.url).hostname;

//  const json = {
//    key: id,
//    url: `https://${domain}/${id}`,
//  };
//  const headers = {
//    "Content-Type": "application/json; charset=UTF-8",
//  };

//  const data = JSON.stringify(json);
//  return new Response(data, { headers, status: 200 });
};
