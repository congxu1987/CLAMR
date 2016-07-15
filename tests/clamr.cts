PARALLEL_EXECUTABLES  : clamr_mpionly=${BIN_DIR}/clamr_mpionly
PARALLEL_EXECUTABLES  : clamr_mpiopenmponly=${BIN_DIR}/clamr_mpiopenmponly
SERIAL_EXECUTABLES    : clamr_cpuonly=${BIN_DIR}/clamr_cpuonly
SERIAL_EXECUTABLES    : clamr_openmponly=${BIN_DIR}/clamr_openmponly
DATA_LINKS            : ${BIN_DIR}/clamr_cpuonly
DATA_LINKS            : ${BIN_DIR}/clamr_mpionly
DATA_LINKS            : ${BIN_DIR}/clamr_openmponly
DATA_LINKS            : ${BIN_DIR}/clamr_mpiopenmponly
DATA_LINKS            : ${CTS_BIN}/compare_stdout.pl
DATA_LINKS            : ${CTS_BIN}/compute_speedup.pl
DATA_LINKS            : ${CTS_BIN}/cts_diff.pl
DEFAULT_NUM_CPUS      : 2
DEFAULT_TIME_LIMIT    : 0:30
DEFAULT_TESTSUITES    : clamr.suite
TESTSUITE_DIRECTORIES : .
TEST_DIRECTORIES      : .
REPORTS               : text html
#if (`uname -n` == /^ml/) then
#   SYSTEM_NAME moonlight
#   QUEUE : access
#endif