declare module "java.security.cert.Certificate" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Provider$$Type} from "java.security.Provider"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"

export class $Certificate implements $Serializable$$Interface {
public "verify"(arg0: $PublicKey$$Type, arg1: StringJS): void
public "verify"(arg0: $PublicKey$$Type, arg1: $Provider$$Type): void
public "verify"(arg0: $PublicKey$$Type): void
public "getPublicKey"(): $PublicKey
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): StringJS
public "getEncoded"(): (byte)[]
get "publicKey"(): $PublicKey
get "type"(): StringJS
get "encoded"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Certificate$$Type = ($Certificate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Certificate$$Original = $Certificate;}
declare module "java.security.cert.CertPath" {
import {$Iterator} from "java.util.Iterator"
import {$Certificate} from "java.security.cert.Certificate"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List} from "java.util.List"

export class $CertPath implements $Serializable$$Interface {
public "getEncodings"(): $Iterator<(StringJS)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getCertificates"(): $List<($Certificate)>
public "getType"(): StringJS
public "getEncoded"(): (byte)[]
public "getEncoded"(arg0: StringJS): (byte)[]
get "encodings"(): $Iterator<(StringJS)>
get "certificates"(): $List<($Certificate)>
get "type"(): StringJS
get "encoded"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CertPath$$Type = ($CertPath);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CertPath$$Original = $CertPath;}
