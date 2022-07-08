#!/usr/bin/env bash
TODO=$(curl -Ls -o ./result.log -w %{url_effective} https://en.wikipedia.org/wiki/Special:Random)

TODO_URL="${TODO_URL:=http://localhost:3000/todos}"

TEXT="Read ${TODO}."

BODY='{"text":"'$TEXT'"}'

curl -d "${BODY}" -X POST -H "Content-Type: application/json; charset=utf-8" $TODO_URL
