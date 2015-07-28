define({
	"_error": {
		output: `docker: '{{}}' is not a docker command. See 'docker --help'.`
	},
	"info" : {
		output: `Containers: 9
Images: 143
Storage Driver: devicemapper
 Pool Name: docker-202:2-8817411-pool
 Pool Blocksize: 65.54 kB
 Backing Filesystem: xfs
 Data file: /dev/loop0
 Metadata file: /dev/loop1
 Data Space Used: 5.342 GB
 Data Space Total: 107.4 GB
 Data Space Available: 3.614 GB
 Metadata Space Used: 8.331 MB
 Metadata Space Total: 2.147 GB
 Metadata Space Available: 2.139 GB
 Udev Sync Supported: true
 Data loop file: /var/lib/docker/devicemapper/devicemapper/data
 Metadata loop file: /var/lib/docker/devicemapper/devicemapper/metadata
 Library Version: 1.02.93-RHEL7 (2015-01-28)
Execution Driver: native-0.2
Kernel Version: 3.10.0-229.el7.x86_64
Operating System: Red Hat Enterprise Linux Server 7.1 (Maipo)
CPUs: 4
Total Memory: 15.26 GiB
Name: ip-172-31-37-98.us-west-2.compute.internal
ID: 6BEA:KJB3:SZWR:NKAZ:H7BZ:Z6UP:DCEH:UVEH:PW4X:F4T2:K7W6:K2MY`
	},
	"help" : {
		output: `Usage: docker [OPTIONS] COMMAND [arg...]

A self-sufficient runtime for linux containers.

Options:
  --api-cors-header=                   Set CORS headers in the remote API
  -b, --bridge=                        Attach containers to a network bridge
  --bip=                               Specify network bridge IP
  -D, --debug=false                    Enable debug mode
  -d, --daemon=false                   Enable daemon mode
  --default-ulimit=[]                  Set default ulimits for containers
  --dns=[]                             DNS server to use
  --dns-search=[]                      DNS search domains to use
  -e, --exec-driver=native             Exec driver to use
  --fixed-cidr=                        IPv4 subnet for fixed IPs
  --fixed-cidr-v6=                     IPv6 subnet for fixed IPs
  -G, --group=docker                   Group for the unix socket
  -g, --graph=/var/lib/docker          Root of the Docker runtime
  -H, --host=[]                        Daemon socket(s) to connect to
  -h, --help=false                     Print usage
  --icc=true                           Enable inter-container communication
  --insecure-registry=[]               Enable insecure registry communication
  --ip=0.0.0.0                         Default IP when binding container ports
  --ip-forward=true                    Enable net.ipv4.ip_forward
  --ip-masq=true                       Enable IP masquerading
  --iptables=true                      Enable addition of iptables rules
  --ipv6=false                         Enable IPv6 networking
  -l, --log-level=info                 Set the logging level
  --label=[]                           Set key=value labels to the daemon
  --log-driver=json-file               Containers logging driver
  --mtu=0                              Set the containers network MTU
  -p, --pidfile=/var/run/docker.pid    Path to use for daemon PID file
  --registry-mirror=[]                 Preferred Docker registry mirror
  -s, --storage-driver=                Storage driver to use
  --selinux-enabled=false              Enable selinux support
  --storage-opt=[]                     Set storage driver options
  --tls=false                          Use TLS; implied by --tlsverify
  --tlscacert=~/.docker/ca.pem         Trust certs signed only by this CA
  --tlscert=~/.docker/cert.pem         Path to TLS certificate file
  --tlskey=~/.docker/key.pem           Path to TLS key file
  --tlsverify=false                    Use TLS and verify the remote
  -v, --version=false                  Print version information and quit

Commands:
    attach    Attach to a running container
    build     Build an image from a Dockerfile
    commit    Create a new image from a container's changes
    cp        Copy files/folders from a container's filesystem to the host path
    create    Create a new container
    diff      Inspect changes on a container's filesystem
    events    Get real time events from the server
    exec      Run a command in a running container
    export    Stream the contents of a container as a tar archive
    history   Show the history of an image
    images    List images
    import    Create a new filesystem image from the contents of a tarball
    info      Display system-wide information
    inspect   Return low-level information on a container or image
    kill      Kill a running container
    load      Load an image from a tar archive
    login     Register or log in to a Docker registry server
    logout    Log out from a Docker registry server
    logs      Fetch the logs of a container
    port      Lookup the public-facing port that is NAT-ed to PRIVATE_PORT
    pause     Pause all processes within a container
    ps        List containers
    pull      Pull an image or a repository from a Docker registry server
    push      Push an image or a repository to a Docker registry server
    rename    Rename an existing container
    restart   Restart a running container
    rm        Remove one or more containers
    rmi       Remove one or more images
    run       Run a command in a new container
    save      Save an image to a tar archive
    search    Search for an image on the Docker Hub
    start     Start a stopped container
    stats     Display a stream of a containers' resource usage statistics
    stop      Stop a running container
    tag       Tag an image into a repository
    top       Lookup the running processes of a container
    unpause   Unpause a paused container
    version   Show the Docker version information
    wait      Block until a container stops, then print its exit code

Run 'docker COMMAND --help' for more information on a command.`
	},
	"version" : {
		output: `Client version: 1.6.2-cs5
Client API version: 1.18
Go version (client): go1.4.2
Git commit (client): 6f88399
OS/Arch (client): linux/amd64
Server version: 1.6.2-cs5
Server API version: 1.18
Go version (server): go1.4.2
Git commit (server): 6f88399
OS/Arch (server): linux/amd64`
	},
	"-v" : {
		output: "Docker version 1.6.2-cs5, build 6f88399"
	},
	"--version" : {
		output: "Docker version 1.6.2-cs5, build 6f88399"
	},
	"search tutorial": {
		output: `NAME                                       DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
learn/tutorial                                                                             11                   
florentbenoit/docker-angularjs-tutorials                                                   1                    [OK]
cazcade/weave-multicast-tutorial                                                           0                    [OK]
delta2323/jnns2015-tutorial-gpu                                                            0                    [OK]
neilellis/weave-multicast-tutorial                                                         0                    [OK]
sfilipov/rails-tutorial                                                                    0                    [OK]
pgrund/docker-tutorial                                                                     0                    [OK]
fabioberger/dockerize-tutorial                                                             0                    [OK]
ianneub/rails-tutorial                                                                     0                    [OK]
tobegit3hub/tutorial-beego                                                                 0                    [OK]
li123456/tutorial                          tutorial                                        0                    
msfuko/nodejs-tutorial                                                                     0                    [OK]
alectolytic/quagga-bgp-tutorial                                                            0                    [OK]
mgalloy/docker-austin-tutorial-02                                                          0                    [OK]
lmagnus/tutorials                                                                          0                    [OK]
wonderlamb/tutorial                        Tutorial                                        0                    
kedarvaidya/rails-tutorial-v3-dev                                                          0                    [OK]
intrig/tutorial                                                                            0                    
johnklee/tutorial                          Testing purpose                                 0                    
bzamecnik/docker-tutorial                  Docker tutorial                                 0                    
richardqa/tutorial                                                                         0                    
pavanadepu/tutorial                                                                        0                    
eivindee/docker-tutorial                   Following the tutorial from http://docs.do...   0                    
odk211/spree-tutorial                                                                      0                    [OK]
delta2323/jnns2015-tutorial                                                                0                    [OK]`
	},
"pull learn/tutorial": {
	output: `Pulling repository learn/tutorial
8dbd9e392a96: Download complete 
Status: Downloaded newer image for learn/tutorial:latest`
}
});
