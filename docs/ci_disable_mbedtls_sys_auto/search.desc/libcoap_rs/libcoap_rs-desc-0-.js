searchState.loadedDescShard("libcoap_rs", 0, "A safe wrapper around the libcoap C library.\nA CoAP Context — container for general state and …\nTrait for CoAP event handlers.\nA handler for CoAP requests on a resource.\nRepresentation of a CoapResource that can be requested …\nAdds an attribute with a name and an optional value to a …\nCreates a new DTLS endpoint that is bound to the given …\nCreates a new TCP endpoint that is bound to the given …\nCreates a new UDP endpoint that is bound to the given …\nAdds the given resource to the resource pool of this …\nCryptography interfaces and types.\nReturns the maximum size for Capabilities and Settings …\nReturns the timeout for Capabilities and Settings Messages\nPerforms currently outstanding IO operations, waiting for …\nError types\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new request handler using the given raw handler …\nHandle the receival of a badly formatted packet.\nHandle the receival of a badly formatted packet.\nHandle a DTLS closed event.\nHandle a DTLS closed event.\nHandle a DTLS connected event.\nHandle a DTLS connected event.\nHandle a DTLS error event.\nHandle a DTLS error event.\nHandle a DTLS renegotiation event.\nHandle a DTLS renegotiation event.\nHandle a failure to perform a keepalive (no response to …\nHandle a failure to perform a keepalive (no response to …\nHandle a retransmission event.\nHandle a retransmission event.\nHandle a decoding error when parsing OSCORE options.\nHandle a decoding error when parsing OSCORE options.\nHandle an OSCORE decryption failure event.\nHandle an OSCORE decryption failure event.\nHandle an OSCORE internal error.\nHandle an OSCORE internal error.\nHandle an OSCORE no protected payload provided event.\nHandle an OSCORE no protected payload provided event.\nHandle an OSCORE no security definition found event.\nHandle an OSCORE no security definition found event.\nHandle an OSCORE not enabled event.\nHandle an OSCORE not enabled event.\nHandle a partially received message.\nHandle a partially received message.\nHandle the deletion of a server-side session.\nHandle the deletion of a server-side session.\nHandle the creation of a new server-side session.\nHandle the creation of a new server-side session.\nHandle a session closed event.\nHandle a session closed event.\nHandle a session connected event.\nHandle a session connected event.\nHandle a session failed event.\nHandle a session failed event.\nHandle a TCP closed event.\nHandle a TCP closed event.\nHandle a TCP connected event.\nHandle a TCP connected event.\nHandle a TCP failed event.\nHandle a TCP failed event.\nHandle a WebSocket layer closed event.\nHandle a WebSocket layer closed event.\nHandle a WebSocket layer up event.\nHandle a WebSocket layer up event.\nHandle an oversized WebSocket packet event.\nHandle an oversized WebSocket packet event.\nHandle a failure to transmit a block.\nHandle a failure to transmit a block.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nJoins a multicast group.\nReturns the maximum number of server-side sessions that …\nReturns the maximum number of idle server-side sessions …\nTypes related to message handling, parsing and creation.\nCreates a new CoapResourceHandler with the given function …\nCreates a new context.\nCreates a new CoapResource for the given <code>uri_path</code>.\nCreates a new CoapResourceHandler with the given function …\nNotify any observers about changes to this resource.\nModule containing methods for accessing or configuring the …\nVarious types that are specified and defined in the CoAP …\nCreate a CoapRequestHandler using the provided function.\nRestores a resource from its raw coap_resource_t.\nReturn the duration that idle server-side sessions are …\nSets the maximum size for Capabilities and Settings …\nSets the timeout for Capabilities and Settings Messages\nSets whether this resource can be observed by clients …\nSets the number of seconds to wait before sending a CoAP …\nSets the maximum number of server-side sessions that can …\nSets the maximum number of idle server-side sessions for …\nSets the handler function for a given method code.\nSets whether observe notifications for this resource …\nConvenience wrapper around <code>set_pki_root_cas</code> that can be …\nSets the path to a CA certificate file and/or a directory …\nSets the server-side cryptography information provider.\nSets the server-side cryptography information provider.\nSet the duration that idle server-side sessions are kept …\nPerforms a controlled shutdown of the CoAP context.\nTypes required for conversion between libcoap C library …\nReturns the user data associated with this resource.\nMutably returns the user data associated with this …\nClient-side context for cryptography.\nContext for a client-side DTLS session using a public key …\nContext for a client-side DTLS session with pre-shared …\nContext for a client-side DTLS session using raw public …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nTypes and traits related to (D)TLS with raw public keys …\nTypes and traits related to support for (D)TLS with …\nPrivate key type for DER/ASN.1 encoded keys.\nTrait for markers that indicate whether a PKI/RPK DTLS …\nMarker indicating that a cryptographic context does …\nKey component that is stored in a DER-encoded file with …\nKey component that is stored in memory as a DER-encoded …\nKey component that is passed to the TLS library verbatim …\nTrait indicating that a type can be used as a DTLS key …\nTrait for types that can be used as a libcoap DTLS …\nTrait for marker structs that describe different types of …\nThe key type of this key definition.\nMarker indicating that a cryptographic context does not do …\nKey component that is stored in a PEM-encoded file with …\nKey component that is stored in memory as a PEM-encoded …\nKey component that is stored as a PKCS11 URI.\n(Marker) key type for keys with a certificate signed by a …\nPKI based configuration.\nTrait for types that can check whether a peer’s or CA …\nKey definition for a DTLS key consisting of a private key …\nA configuration context for PKI or RPK based DTLS …\nBuilder for a PKI or RPK configuration context.\nTrait for things that can provide RPK/PKI DTLS keys for a …\n(Marker) key type for asymmetric DTLS keys not signed by a …\nKey definition for a DTLS key consisting of a private and …\nTrait for types that can validate that a raw public key is …\nA context configuration for server-side PKI or RPK based …\nAllows or disallows use of unsupported MD hashes.\nAllows or disallows usage of expired certificates by the …\nAllows or disallows disabling certificate revocation …\nAllows or disallows disabling certificate revocation …\nAllows or disallows use of self-signed certificates by the …\nAllows or disallows small RSA key sizes.\nBuilds the configured <code>PkiRpkContext</code> by consuming this …\nEnables or disables verification of the entire certificate …\nEnables or disables certificate revocation checking.\nEnables or disables checking whether both peers’ …\nSets the server name indication that should be sent to …\nSets the common name validator for this encryption context.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProvide a key for the server name indication given as <code>sni</code>, …\nCreates a new context builder with the given <code>key</code> as the …\nCreates a new key definition using the given components.\nCreates a new key definition using the given components.\nSets the raw public key validator for this encryption …\nSets the key provider that provides keys for a SNI …\nEnables/disables use of DTLS connection identifiers (RFC …\nValidates the common name of a peer or intermediate …\nValidates the raw public key of a peer.\nEnables PKI certificate verification of the peer’s …\nCreates a new key definition using DER-encoded files as …\nCreates a new key definition using DER-encoded byte …\nCreates a new key definition using PEM-encoded files as …\nCreates a new key definition using PEM-encoded byte …\nCreates a new key definition using PEM-encoded byte …\nCreates a new key definition using PKCS11 URIs as …\nCreates a new key definition using PKCS11 URIs as …\nClient-side encryption context for PSK-based (D)TLS …\nBuilder for a client-side DTLS encryption context for use …\nTrait for types that can provide the appropriate …\nA pre-shared DTLS key.\nServer-side encryption context for PSK-based (D)TLS …\nBuilder for a server-side DTLS encryption context for use …\nTrait for types that can provide pre-shared keys for a key …\nTrait for things that can provide PSK DTLS keys for a …\nConsumes this builder to construct the resulting PSK …\nConsumes this builder to construct the resulting PSK …\nSets the server name indication that should be sent to …\nReturns the key data bytes as an immutable slice.\nEnables or disables support for EC JPAKE (RFC 8236) key …\nEnables or disables support for EC JPAKE (RFC 8236) key …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSets the key provider that provides a PSK for a given …\nReturns the key’s identity or <code>None</code> if no key identity …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProvides the key for the key <code>identity</code> given by the client …\nReturns the appropriate pre-shared key for a given …\nReturns the key if the supplied <code>identity_hint</code> is <code>None</code> or …\nProvide a key for the server name indication given as <code>sni</code>, …\nSets the key provider that provides pre-shared keys based …\nCreates a new context builder with the given <code>key</code> as the …\nCreates a new key object with the given <code>identity</code> and the …\nCreates a new context builder with the given <code>key</code> as the …\nSets the key provider that provides keys for a SNI …\nEnables or disables use of DTLS connection IDs (RFC 9146).\nProvided URI contains a null byte.\nA critical option (as defined in RFC 7252 was not …\nA message with code 0.00 (Empty) contains data.\nRNG mutex is poisoned (panic in another thread while …\nOption has an illegal value.\nMessage type cannot be used for this message code (e.g., …\nInvalid message code.\nTwo (or more) options were combined which must not be …\nMessage has an option that is specific for another message …\nValue of an option is invalid.\nMessage has no ID.\nMessage has no token.\nNon-repeatable option was repeated.\nURI does not have a valid scheme for libcoap (coap, coaps, …\nProvided URI has invalid scheme.\nProvided message code for request was not a request code.\nProvided message code for response was not a response code.\nA string value could not be converted to UTF-8.\nProvided value for option is too long.\nProvided value for option is too short.\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap\nUnknown error inside of libcoap.\nURI encoded in message could not be parsed.\nStored application data type differs from requested type\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRepresentation of a CoAP message.\nInterface for CoAP messages common between requests, …\nRepresentation of a CoAP option including its value.\nAdd the supplied CoAP option to this message.\nReturns a reference to this message.\nReturns a mutable reference to this message.\nClear the list of options that were added to this message …\nReturns the message code of this message. To determine …\nReturns a reference to the data/body of this message.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParses the given raw coap_pdu_t into a CoapMessage.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this message into a raw PDU suitable for sending …\nConverts the option into a <code>Box&lt;[u8]&gt;</code> containing the value …\nReturns the CoAP message ID for this message.\nCreates a new CoAP message with the given type and code.\nReturns the option number associated with this option.\nReturns an iterator over the options contained in this …\nSets the message code of this message.\nSets the data/body of this message.\nSets the CoAP message ID for this message.\nSets the message token.\nSets the CoAP message type (confirmable, non-confirmable, …\nReturns the message token.\nReturns the CoAP message type (confirmable, …\nRepresentation of a CoAP request message.\nReturns the “Accept” option value for this request.\nReturns the “Content-Format” option value for this …\nReturns the “ETag” option value for this request.\nReturns the argument unchanged.\nParses the given CoapMessage into a CoapRequest.\nReturns the “Hop-Limit” option value of this request.\nReturns the “If-Match” option value for this request.\nReturns the “If-None-Match” option value of this …\nCalls <code>U::from(self)</code>.\nConverts this request into a CoapMessage that can be sent …\nCreates a new CoAP request with the given message type and …\nReturns the “No-Response” option value for this …\nReturns the “Observe” option value for this request.\nSets the “Accept” option value for this request.\nSets the message code of this request.\nSets the “Content-Format” option value for this …\nSets the “ETag” option value for this request.\nSets the “Hop-Limit” option value for this request.\nSets the “If-Match” option value for this request.\nSets the “If-None-Match” option value for this request.\nSets the “No-Response” option value for this request.\nSets the “Observe” option value for this request.\nReturns the CoAP URI that is requested.\nReturns the “Content-Format” option value for this …\nReturns the “Echo” option value for this request.\nReturns the “ETag” option value for this request.\nReturns the argument unchanged.\nParses the given CoapMessage into a CoapResponse.\nCalls <code>U::from(self)</code>.\nConverts this request into a CoapMessage that can be sent …\nReturns the “Location” option value for this request.\nReturns the “Max-Age” option value for this response.\nCreates a new CoAP response with the given message type …\nReturns the “Observe” option value for this request.\nSets the message code of this response.\nSets the “Content-Format” option value for this …\nSets the “Echo” option value for this response.\nSets the “ETag” option value for this response.\nSets the “Location-Path” and “Location-Query” …\nSets the “Max-Age” option value for this response.\nSets the “Observe” option value for this response.\nImplementation of the rand::RngCore trait based on libcoap…\nAttempts to fill <code>dest</code> with random bytes using libcoap’s …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSeeds the default PRNG of libcoap with the provided seed.\nConfigures libcoap to use the provided <code>rng</code> for …\nAccept option (RFC 7252, Section 5.10.4).\nAcknowledgement for a previous message.\nBlock1 option (RFC 7959, Section 2.1).\nBlock2 option (RFC 7959, Section 2.1).\nVarious content formats that can be used for CoAP requests.\nRepresentation of a CoAP match expression supplied in the …\nRepresentation of a CoAP message code. Can be a request …\nCoAP message types as defined in RFC 7252, Section 3 and …\nCoAP option types as defined in RFC 7252, Section 5.10 and …\nRepresentation of a CoAP request/method code.\nRepresentation of a CoAP response code.\nConfirmable message, i.e. a message whose reception should …\nContent-Format option (RFC 7252, Section 5.10.3).\nETag option (RFC 7252, Section 5.10.6).\nEcho option (RFC 9175, Section 2.2).\nHop-Limit option (RFC 8768, Section 3).\nIf-Match option (RFC 7252, Section 5.10.8.1).\nIf-None-Match option (RFC 7252, Section 5.10.8.2).\nLocation-Path option (RFC 7252, Section 5.10.7).\nLocation-Query option (RFC 7252, Section 5.10.7).\nMax-Age option (RFC 7252, Section 5.10.5).\nNo-Response option (RFC 7967, Section 2).\nNon-confirmable message, i.e. a message whose reception …\nObserve option (RFC 7641, Section 2).\nOSCORE option (RFC 8613, Section 2.\nProxy-Scheme option (RFC 7252, Section 5.10.2).\nProxy-Uri option (RFC 7252, Section 5.10.2).\nQ-Block1 option (RFC 9177, Section 4).\nQ-Block2 option (RFC 9177, Section 4).\nRequest-Tag option (RFC 9175, Section 3.2).\nNon-acknowledgement for a previous message.\nSize1 option (RFC 7959, Section 4).\nSize2 option (RFC 7959, Section 4).\nUri-Host option (RFC 7252, Section 5.10.1).\nUri-Path option (RFC 7252, Section 5.10.1).\nUri-Port option (RFC 7252, Section 5.10.1).\nUri-Query option (RFC 7252, Section 5.10.1).\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the maximum size in bytes that a value of this …\nReturns the minimum size in bytes that a value of this …\nReturns the option number this type belongs to.\nReturns the corresponding raw code for this message code, …\nReturns the raw coap_pdu_code_t corresponding to this …\nReturns the raw coap_pdu_code_t corresponding to this …\nReturns the corresponding raw coap_pdu_type_t instance for …\nReturns the coap_request_t corresponding to this request …\nA handle returned by CoAP sessions upon sending a request.\nThe representation of a CoAP session.\nTrait for functions that are common between client and …\nRepresentation of the states that a session can be in.\nReturns the Ack-Random-Factor used by libcoap.\nReturns the current value of the Acknowledgement Timeout …\nReturns the local address for this session.\nReturns the remote address for this session.\nReturns the application specific data stored alongside …\nClears the application-specific data stored alongside this …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the interface index for this session.\nInitializes the initial token value used by libcoap for …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether this session waits for the provided token.\nReturns the maximum size of a PDU for this session.\nReturns the maximum number of retransmissions for this …\nReturns the next token that should be used for requests.\nReturns the next message ID that should be used for this …\nPolls whether the request for the given handle already has …\nReturns the underlying transport protocol used for this …\nReturns the current PSK hint for this session.\nReturns the current PSK identity for this session.\nReturns the current PSK key for this session.\nReturns a reference to the underlying raw session.\nReturns a mutable reference to the underlying raw session.\nStops listening for responses to this request handle.\nSend the given message-like object to the peer.\nSend a ping message to the remote peer.\nSends the given CoapRequest, returning a CoapRequestHandle …\nSets the Ack-Random-Factor used by libcoap.\nSets the value of the Acknowledgement Timeout for this …\nSets the application-specific data stored alongside this …\nSets the maximum number of retransmissions for this …\nSets maximum number of hops for multicast request\nSets the maximum size of a PDU for this session.\nReturns the current state of this session.\nRepresentation of a client-side CoAP session.\nCreate a new DTLS encrypted session with the given peer …\nCreate a new unencrypted session with the given peer over …\nCreate a new unencrypted session with the given peer over …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRepresentation of a server-side CoAP session.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSets the default MTU value of the endpoint.\nIdentifier for a CoAP message.\nTransport protocols that can be used with libcoap.\nRepresentation of a URI for CoAP requests, responses or …\nRepresentation for a URI scheme that can be used in CoAP …\nInterface index used internally by libcoap to refer to an …\nValue for maximum retransmits.\nProvides a reference to the raw coap_uri_t struct …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts the given <code>raw_uri</code> to a new CoapUri instance.\nReturns the host part of this URI.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the given URI into a <code>Vec</code> of CoapOptions that can …\nReturns whether this URI is a proxy URI.\nCreates a new CoapUri for use as a request or location URI …\nCreates a new CoapUri for use as a proxy URI from its …\nAttempts to convert the provided <code>path</code> and <code>query</code> into a …\nReturns the URI path part of this URI.\nReturns the port of this URI (if provided).\nReturns the host part of this URI.\nReturns the scheme part of this URI.\nAttempts to convert the provided <code>uri_str</code> into a CoapUri …\nAttempts to convert the provided <code>uri_str</code> into a CoapUri …\nAttempts to convert a Url into a CoapUri.\nAttempts to convert a Url into a proxy CoapUri.")