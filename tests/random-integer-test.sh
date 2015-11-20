#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh


function onetest () {
  function_test "randomInteger(${1},${2})"
  if [ "$?" -ne "0" ] ; then
    exit 1
  fi
  
  if [ "${FUNCTION_RESULT}" -lt ${1} ] || [ "${FUNCTION_RESULT}" -gt ${2} ] ; then
    echo "Failed: randomInteger(${1},${2}) = ${FUNCTION_RESULT}"
    exit 1
  fi
      
  LAST_SUCCESS="<small><b>Input:</b> randomInteger(${1},${2})</small>"
  LAST_SUCCESS="${LAST_SUCCESS}<br/><small><b>Your Output: </b></small>${FUNCTION_RESULT}"

}

start_js_test 'random-integer.js'

onetest 1 1
onetest 10 10
onetest 100 110
onetest 0 1
onetest 0 1
onetest 0 1
onetest 100000 200000
onetest 100000 200000
onetest 100000 200000
onetest 1000 1010

end_js_test