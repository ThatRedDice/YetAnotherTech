declare module "dan200.computercraft.api.filesystem.WritableMount" {
import {$SeekableByteChannel} from "java.nio.channels.SeekableByteChannel"
import {$Mount$$Interface} from "dan200.computercraft.api.filesystem.Mount"
import {$List$$Type} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$OpenOption$$Type} from "java.nio.file.OpenOption"
import {$BasicFileAttributes} from "java.nio.file.attribute.BasicFileAttributes"

export interface $WritableMount$$Interface extends $Mount$$Interface {
get "remainingSpace"(): long
get "capacity"(): long
}

export class $WritableMount implements $WritableMount$$Interface {
 "getRemainingSpace"(): long
 "makeDirectory"(arg0: StringJS): void
 "rename"(arg0: StringJS, arg1: StringJS): void
 "delete"(arg0: StringJS): void
 "isReadOnly"(arg0: StringJS): boolean
 "getCapacity"(): long
 "openFile"(arg0: StringJS, arg1: $Set$$Type<($OpenOption$$Type)>): $SeekableByteChannel
 "openForRead"(arg0: StringJS): $SeekableByteChannel
 "list"(arg0: StringJS, arg1: $List$$Type<(StringJS)>): void
 "getSize"(arg0: StringJS): long
 "getAttributes"(arg0: StringJS): $BasicFileAttributes
 "exists"(arg0: StringJS): boolean
 "isDirectory"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableMount$$Type = ($WritableMount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableMount$$Original = $WritableMount;}
declare module "dan200.computercraft.api.filesystem.Mount" {
import {$SeekableByteChannel} from "java.nio.channels.SeekableByteChannel"
import {$List$$Type} from "java.util.List"
import {$BasicFileAttributes} from "java.nio.file.attribute.BasicFileAttributes"

export interface $Mount$$Interface {
}

export class $Mount implements $Mount$$Interface {
 "openForRead"(arg0: StringJS): $SeekableByteChannel
 "list"(arg0: StringJS, arg1: $List$$Type<(StringJS)>): void
 "getSize"(arg0: StringJS): long
 "getAttributes"(arg0: StringJS): $BasicFileAttributes
 "exists"(arg0: StringJS): boolean
 "isDirectory"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mount$$Type = ($Mount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mount$$Original = $Mount;}
