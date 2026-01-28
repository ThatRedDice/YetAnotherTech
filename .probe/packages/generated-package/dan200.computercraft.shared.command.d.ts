declare module "dan200.computercraft.shared.command.arguments.RepeatArgumentType" {
import {$SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Type, $ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$List, $List$$Type} from "java.util.List"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $RepeatArgumentType<T, U> implements $ArgumentType$$Interface<($List<(T)>)> {
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "someFlat"<T>(arg0: $ArgumentType$$Type<($List$$Type<(T)>)>, arg1: $SimpleCommandExceptionType$$Type): $RepeatArgumentType<(T), ($List<(T)>)>
public "getExamples"(): $Collection<(StringJS)>
public "parse"(arg0: $StringReader$$Type): any
public static "some"<T>(arg0: $ArgumentType$$Type<(T)>, arg1: $SimpleCommandExceptionType$$Type): $RepeatArgumentType<(T), (T)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $List<(T)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$$Type<T, U> = ($RepeatArgumentType<(T), (U)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepeatArgumentType$$Original<T, U> = $RepeatArgumentType<(T), (U)>;}
declare module "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type, $ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$RepeatArgumentType} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType"
import {$RepeatArgumentType$Info, $RepeatArgumentType$Info$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Info"
import {$Record} from "java.lang.Record"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RepeatArgumentType$Template extends $Record implements $ArgumentTypeInfo$Template$$Interface<($RepeatArgumentType<(never), (never)>)> {
constructor(info: $RepeatArgumentType$Info$$Type, child: $ArgumentTypeInfo$Template$$Type<(never)>, flatten: boolean, some: $SimpleCommandExceptionType$$Type)

public "flatten"(): boolean
public "type"(): $ArgumentTypeInfo<($RepeatArgumentType<(never), (never)>), (never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "info"(): $RepeatArgumentType$Info
public "child"(): $ArgumentTypeInfo$Template<(never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $RepeatArgumentType<(never), (never)>
public "some"(): $SimpleCommandExceptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Template$$Type = ({"child"?: $ArgumentTypeInfo$Template$$Type<(never)>, "flatten"?: boolean, "some"?: $SimpleCommandExceptionType$$Type, "info"?: $RepeatArgumentType$Info$$Type}) | ([child?: $ArgumentTypeInfo$Template$$Type<(never)>, flatten?: boolean, some?: $SimpleCommandExceptionType$$Type, info?: $RepeatArgumentType$Info$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepeatArgumentType$Template$$Original = $RepeatArgumentType$Template;}
declare module "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RepeatArgumentType, $RepeatArgumentType$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RepeatArgumentType$Template, $RepeatArgumentType$Template$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Template"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RepeatArgumentType$Info implements $ArgumentTypeInfo$$Interface<($RepeatArgumentType<(never), (never)>), ($RepeatArgumentType$Template)> {
constructor()

public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $RepeatArgumentType$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $RepeatArgumentType$Template$$Type, arg1: $JsonObject$$Type): void
public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $RepeatArgumentType$$Type<(never), (never)>): $RepeatArgumentType$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Info$$Type = ($RepeatArgumentType$Info);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepeatArgumentType$Info$$Original = $RepeatArgumentType$Info;}
