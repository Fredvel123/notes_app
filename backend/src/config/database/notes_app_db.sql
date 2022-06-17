CREATE TABLE IF NOT EXISTS "users" (
  id SERIAL PRIMARY KEY,
  first_name varchar(25),
  middle_name varchar(25),
  last_name varchar(60),
  username varchar(30),
  country_code int,
  number_phone int,
  password text,
  email varchar(100),
  bio text,
  pic_profile text,
  pic_id TEXT,
  key_confirm_email VARCHAR(12),
  email_confirmed BOOLEAN,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NOT NULL,
);

CREATE TABLE "friendship" (
  "id" SERIAL PRIMARY KEY,
  "souce" FOREIGN KEY,
  "target" FOREIGN KEY,
  "status" boolean,
  "created_at" timestamp
);

CREATE TABLE "tasks" (
  "task_id" SERIAL PRIMARY KEY,
  "title" TEXT,
  "content" TEXT,
  "creator" FOREIGN KEY,
  "topic" FOREIGN KEY,
  "image" TEXT,
  "image_id" text,
  "done" boolean
);

CREATE TABLE "topics_by_user" (
  "id" SERIAL PRIMARY KEY,
  "user" FOREIGN KEY,
  "topic" varchar(30)
);

CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY,
  "image" text,
  "image_id" text,
  "post" TEXT,
  "user_author" FOREIGN KEY,
  "created_at" timestamp
);

ALTER TABLE "friendship" ADD FOREIGN KEY KEY ("souce") REFERENCES "user" ("id");

ALTER TABLE "friendship" ADD FOREIGN KEY KEY ("target") REFERENCES "user" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY KEY ("creator") REFERENCES "user" ("id");

ALTER TABLE "topics_by_user" ADD FOREIGN KEY KEY ("id") REFERENCES "tasks" ("topic");

ALTER TABLE "topics_by_user" ADD FOREIGN KEY KEY ("user") REFERENCES "user" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY KEY ("user_author") REFERENCES "user" ("id");
