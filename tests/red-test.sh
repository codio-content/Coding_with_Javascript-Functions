#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh


function onetest () {
  function_test "isRed('${1}')"
  if [ "${FUNCTION_RESULT}" != ${2} ] ; then
    echo "Failed: isRed(${1}) = ${FUNCTION_RESULT}"
    exit 1
  fi
}

start_js_test 'red.js'

onetest '' 'false'
onetest 'alskdjlkj alskdj laksjd lakjsdf k1123.;.' 'false'
onetest 'blue' 'false'
onetest 'red' 'true'
onetest 'blue red green' 'true'

end_js_test

