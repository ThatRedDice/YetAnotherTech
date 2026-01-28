declare module "com.mojang.brigadier.tree.CommandNode" {
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$RedirectModifier} from "com.mojang.brigadier.RedirectModifier"
import {$Command} from "com.mojang.brigadier.Command"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$AmbiguityConsumer$$Type} from "com.mojang.brigadier.AmbiguityConsumer"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $CommandNode<S> implements $Comparable$$Interface<($CommandNode<(S)>)> {
public "getCommand"(): $Command<(S)>
public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "findAmbiguities"(arg0: $AmbiguityConsumer$$Type<(S)>): void
public "getRelevantNodes"(arg0: $StringReader$$Type): $Collection<($CommandNode<(S)>)>
public "getRedirect"(): $CommandNode<(S)>
public "getUsageText"(): StringJS
public "getRequirement"(): $Predicate<(S)>
public "isFork"(): boolean
public "getExamples"(): $Collection<(StringJS)>
public "addChild"(arg0: $CommandNode$$Type<(S)>): void
public "getChild"(arg0: StringJS): $CommandNode<(S)>
public "getChildren"(): $Collection<($CommandNode<(S)>)>
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $CommandNode$$Type<(S)>): integer
public "canUse"(arg0: S): boolean
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "createBuilder"(): $ArgumentBuilder<(S), (never)>
get "command"(): $Command<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
get "redirect"(): $CommandNode<(S)>
get "usageText"(): StringJS
get "requirement"(): $Predicate<(S)>
get "fork"(): boolean
get "examples"(): $Collection<(StringJS)>
get "children"(): $Collection<($CommandNode<(S)>)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandNode$$Type<S> = ($CommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandNode$$Original<S> = $CommandNode<(S)>;}
declare module "com.mojang.brigadier.tree.RootCommandNode" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"
import {$CommandNode} from "com.mojang.brigadier.tree.CommandNode"

export class $RootCommandNode<S> extends $CommandNode<(S)> {
constructor()

public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "isValidInput"(arg0: StringJS): boolean
public "getUsageText"(): StringJS
public "getExamples"(): $Collection<(StringJS)>
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "createBuilder"(): $ArgumentBuilder<(S), (never)>
get "usageText"(): StringJS
get "examples"(): $Collection<(StringJS)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootCommandNode$$Type<S> = ($RootCommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RootCommandNode$$Original<S> = $RootCommandNode<(S)>;}
declare module "com.mojang.brigadier.tree.LiteralCommandNode" {
import {$CommandContextBuilder$$Type} from "com.mojang.brigadier.context.CommandContextBuilder"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$Command$$Type} from "com.mojang.brigadier.Command"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ArgumentBuilder} from "com.mojang.brigadier.builder.ArgumentBuilder"

export class $LiteralCommandNode<S> extends $CommandNode<(S)> {
constructor(arg0: StringJS, arg1: $Command$$Type<(S)>, arg2: $Predicate$$Type<(S)>, arg3: $CommandNode$$Type<(S)>, arg4: $RedirectModifier$$Type<(S)>, arg5: boolean)

public "listSuggestions"(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "isValidInput"(arg0: StringJS): boolean
public "getUsageText"(): StringJS
public "getExamples"(): $Collection<(StringJS)>
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type, arg1: $CommandContextBuilder$$Type<(S)>): void
public "getLiteral"(): StringJS
public "createBuilder"(): $ArgumentBuilder
get "usageText"(): StringJS
get "examples"(): $Collection<(StringJS)>
get "name"(): StringJS
get "literal"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralCommandNode$$Type<S> = ($LiteralCommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiteralCommandNode$$Original<S> = $LiteralCommandNode<(S)>;}
