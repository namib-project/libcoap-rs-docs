(function() {
    var implementors = Object.fromEntries([["libcoap_rs",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/psk/struct.PskKey.html\" title=\"struct libcoap_rs::crypto::psk::PskKey\">PskKey</a>&lt;'static&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/crypto/pki_rpk/enum.Asn1PrivateKeyType.html\" title=\"enum libcoap_rs::crypto::pki_rpk::Asn1PrivateKeyType\">Asn1PrivateKeyType</a>&gt; for coap_asn1_privatekey_type_t"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/error/enum.MessageCodeError.html\" title=\"enum libcoap_rs::error::MessageCodeError\">MessageCodeError</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/error/enum.MessageConversionError.html\" title=\"enum libcoap_rs::error::MessageConversionError\">MessageConversionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/error/enum.UriParsingError.html\" title=\"enum libcoap_rs::error::UriParsingError\">UriParsingError</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/error/enum.MessageConversionError.html\" title=\"enum libcoap_rs::error::MessageConversionError\">MessageConversionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/error/enum.UriParsingError.html\" title=\"enum libcoap_rs::error::UriParsingError\">UriParsingError</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/error/enum.OptionValueError.html\" title=\"enum libcoap_rs::error::OptionValueError\">OptionValueError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapRequestCode.html\" title=\"enum libcoap_rs::protocol::CoapRequestCode\">CoapRequestCode</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapMessageCode.html\" title=\"enum libcoap_rs::protocol::CoapMessageCode\">CoapMessageCode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapResponseCode.html\" title=\"enum libcoap_rs::protocol::CoapResponseCode\">CoapResponseCode</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapMessageCode.html\" title=\"enum libcoap_rs::protocol::CoapMessageCode\">CoapMessageCode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libcoap_rs/types/enum.CoapProtocol.html\" title=\"enum libcoap_rs::types::CoapProtocol\">CoapProtocol</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/types/enum.CoapUriScheme.html\" title=\"enum libcoap_rs::types::CoapUriScheme\">CoapUriScheme</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapContentFormat.html\" title=\"enum libcoap_rs::protocol::CoapContentFormat\">CoapContentFormat</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/psk/struct.PskKey.html\" title=\"struct libcoap_rs::crypto::psk::PskKey\">PskKey</a>&lt;'static&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/ffi/c_str/struct.NulError.html\" title=\"struct alloc::ffi::c_str::NulError\">NulError</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/error/enum.UriParsingError.html\" title=\"enum libcoap_rs::error::UriParsingError\">UriParsingError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"enum\" href=\"libcoap_rs/error/enum.OptionValueError.html\" title=\"enum libcoap_rs::error::OptionValueError\">OptionValueError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/message/request/struct.CoapRequest.html\" title=\"struct libcoap_rs::message::request::CoapRequest\">CoapRequest</a>&gt; for <a class=\"struct\" href=\"libcoap_rs/message/struct.CoapMessage.html\" title=\"struct libcoap_rs::message::CoapMessage\">CoapMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/message/response/struct.CoapResponse.html\" title=\"struct libcoap_rs::message::response::CoapResponse\">CoapResponse</a>&gt; for <a class=\"struct\" href=\"libcoap_rs/message/struct.CoapMessage.html\" title=\"struct libcoap_rs::message::CoapMessage\">CoapMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;coap_asn1_privatekey_type_t&gt; for <a class=\"enum\" href=\"libcoap_rs/crypto/pki_rpk/enum.Asn1PrivateKeyType.html\" title=\"enum libcoap_rs::crypto::pki_rpk::Asn1PrivateKeyType\">Asn1PrivateKeyType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;coap_pdu_type_t&gt; for <a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapMessageType.html\" title=\"enum libcoap_rs::protocol::CoapMessageType\">CoapMessageType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;coap_request_t&gt; for <a class=\"enum\" href=\"libcoap_rs/protocol/enum.CoapRequestCode.html\" title=\"enum libcoap_rs::protocol::CoapRequestCode\">CoapRequestCode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;coap_session_state_t&gt; for <a class=\"enum\" href=\"libcoap_rs/session/enum.CoapSessionState.html\" title=\"enum libcoap_rs::session::CoapSessionState\">CoapSessionState</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;coap_uri_scheme_t&gt; for <a class=\"enum\" href=\"libcoap_rs/types/enum.CoapUriScheme.html\" title=\"enum libcoap_rs::types::CoapUriScheme\">CoapUriScheme</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/psk/struct.PskKey.html\" title=\"struct libcoap_rs::crypto::psk::PskKey\">PskKey</a>&lt;'static&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.PkiRpkContext.html\" title=\"struct libcoap_rs::crypto::pki_rpk::PkiRpkContext\">PkiRpkContext</a>&lt;'a, <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.Pki.html\" title=\"struct libcoap_rs::crypto::pki_rpk::Pki\">Pki</a>&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/crypto/enum.ClientCryptoContext.html\" title=\"enum libcoap_rs::crypto::ClientCryptoContext\">ClientCryptoContext</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.PkiRpkContext.html\" title=\"struct libcoap_rs::crypto::pki_rpk::PkiRpkContext\">PkiRpkContext</a>&lt;'a, <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.Pki.html\" title=\"struct libcoap_rs::crypto::pki_rpk::Pki\">Pki</a>&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/crypto/pki_rpk/enum.ServerPkiRpkCryptoContext.html\" title=\"enum libcoap_rs::crypto::pki_rpk::ServerPkiRpkCryptoContext\">ServerPkiRpkCryptoContext</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.PkiRpkContext.html\" title=\"struct libcoap_rs::crypto::pki_rpk::PkiRpkContext\">PkiRpkContext</a>&lt;'a, <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.Rpk.html\" title=\"struct libcoap_rs::crypto::pki_rpk::Rpk\">Rpk</a>&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/crypto/enum.ClientCryptoContext.html\" title=\"enum libcoap_rs::crypto::ClientCryptoContext\">ClientCryptoContext</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.PkiRpkContext.html\" title=\"struct libcoap_rs::crypto::pki_rpk::PkiRpkContext\">PkiRpkContext</a>&lt;'a, <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.Rpk.html\" title=\"struct libcoap_rs::crypto::pki_rpk::Rpk\">Rpk</a>&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/crypto/pki_rpk/enum.ServerPkiRpkCryptoContext.html\" title=\"enum libcoap_rs::crypto::pki_rpk::ServerPkiRpkCryptoContext\">ServerPkiRpkCryptoContext</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/crypto/psk/struct.ClientPskContext.html\" title=\"struct libcoap_rs::crypto::psk::ClientPskContext\">ClientPskContext</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/crypto/enum.ClientCryptoContext.html\" title=\"enum libcoap_rs::crypto::ClientCryptoContext\">ClientCryptoContext</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/session/client/struct.CoapClientSession.html\" title=\"struct libcoap_rs::session::client::CoapClientSession\">CoapClientSession</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/session/enum.CoapSession.html\" title=\"enum libcoap_rs::session::CoapSession\">CoapSession</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"libcoap_rs/session/server/struct.CoapServerSession.html\" title=\"struct libcoap_rs::session::server::CoapServerSession\">CoapServerSession</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/session/enum.CoapSession.html\" title=\"enum libcoap_rs::session::CoapSession\">CoapSession</a>&lt;'a&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/poison/struct.PoisonError.html\" title=\"struct std::sync::poison::PoisonError\">PoisonError</a>&lt;T&gt;&gt; for <a class=\"enum\" href=\"libcoap_rs/error/enum.RngError.html\" title=\"enum libcoap_rs::error::RngError\">RngError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.DerFileKeyComponent.html\" title=\"struct libcoap_rs::crypto::pki_rpk::DerFileKeyComponent\">DerFileKeyComponent</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.PemFileKeyComponent.html\" title=\"struct libcoap_rs::crypto::pki_rpk::PemFileKeyComponent\">PemFileKeyComponent</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;, U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T, U)</a>&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/psk/struct.PskKey.html\" title=\"struct libcoap_rs::crypto::psk::PskKey\">PskKey</a>&lt;'static&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/ffi/c_str/struct.CString.html\" title=\"struct alloc::ffi::c_str::CString\">CString</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.EngineKeyComponent.html\" title=\"struct libcoap_rs::crypto::pki_rpk::EngineKeyComponent\">EngineKeyComponent</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/ffi/c_str/struct.CString.html\" title=\"struct alloc::ffi::c_str::CString\">CString</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.Pkcs11KeyComponent.html\" title=\"struct libcoap_rs::crypto::pki_rpk::Pkcs11KeyComponent\">Pkcs11KeyComponent</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.DerMemoryKeyComponent.html\" title=\"struct libcoap_rs::crypto::pki_rpk::DerMemoryKeyComponent\">DerMemoryKeyComponent</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"libcoap_rs/crypto/pki_rpk/struct.PemMemoryKeyComponent.html\" title=\"struct libcoap_rs::crypto::pki_rpk::PemMemoryKeyComponent\">PemMemoryKeyComponent</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[18060]}