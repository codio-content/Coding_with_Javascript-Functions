#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh


function onetest () {
  function_test "randomInteger(${1},${2})"
  if [ "${FUNCTION_RESULT}" -lt ${1} ] || [ "${FUNCTION_RESULT}" -gt ${2} ] ; then
    echo "Failed: randomInteger(${1},${2}) = ${FUNCTION_RESULT}"
    exit 1
  fi
}

start_js_test 'random-integer.js'

onetest 1 1
onetest 10 10
onetest 100 110
onetest 1000 1010
onetest 0 1
onetest 0 1
onetest 0 1
onetest 100000 200000
onetest 100000 200000
onetest 100000 200000

end_js_test