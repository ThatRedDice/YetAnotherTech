declare module "net.minecraft.data.tags.TagsProvider$TagLookup" {
import {$TagBuilder, $TagBuilder$$Type} from "net.minecraft.tags.TagBuilder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"

export interface $TagsProvider$TagLookup$$Interface<T> extends $Function$$Interface<($TagKey<(T)>), ($Optional<($TagBuilder)>)> {

(arg0: $TagKey<(T)>): ($TagBuilder$$Type)?
}

export class $TagsProvider$TagLookup<T> implements $TagsProvider$TagLookup$$Interface {
 "contains"(arg0: $TagKey$$Type<(T)>): boolean
static "empty"<T>(): $TagsProvider$TagLookup<(T)>
 "apply"(arg0: $TagKey$$Type<(T)>): $Optional<($TagBuilder)>
static "identity"<T>(): $Function<($TagKey<(T)>), ($TagKey<(T)>)>
 "compose"<V>(arg0: $Function$$Type<(V), ($TagKey$$Type<(T)>)>): $Function<(V), ($Optional<($TagBuilder)>)>
 "andThen"<V>(arg0: $Function$$Type<($Optional<($TagBuilder)>), (V)>): $Function<($TagKey<(T)>), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsProvider$TagLookup$$Type<T> = ((arg0: $TagKey<(T)>) => ($TagBuilder$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsProvider$TagLookup$$Original<T> = $TagsProvider$TagLookup<(T)>;}
declare module "net.minecraft.data.tags.IntrinsicHolderTagsProvider" {
import {$TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$TagsProvider} from "net.minecraft.data.tags.TagsProvider"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Function$$Type} from "java.util.function.Function"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"

export class $IntrinsicHolderTagsProvider<T> extends $TagsProvider<(T)> {
/**
 * 
 * @deprecated
 */
constructor(arg0: $PackOutput$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>)
constructor(arg0: $PackOutput$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg3: $CompletableFuture$$Type<($TagsProvider$TagLookup$$Type<(T)>)>, arg4: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>, arg5: StringJS, arg6: $ExistingFileHelper$$Type)
constructor(arg0: $PackOutput$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>, arg4: StringJS, arg5: $ExistingFileHelper$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $PackOutput$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg3: $CompletableFuture$$Type<($TagsProvider$TagLookup$$Type<(T)>)>, arg4: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>)

public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntrinsicHolderTagsProvider$$Type<T> = ($IntrinsicHolderTagsProvider<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntrinsicHolderTagsProvider$$Original<T> = $IntrinsicHolderTagsProvider<(T)>;}
declare module "net.minecraft.data.tags.TagsProvider" {
import {$TagsProvider$TagLookup} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$DataProvider$$Interface} from "net.minecraft.data.DataProvider"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path$$Type} from "java.nio.file.Path"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TagsProvider<T> implements $DataProvider$$Interface {
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsProvider$$Type<T> = ($TagsProvider<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsProvider$$Original<T> = $TagsProvider<(T)>;}
declare module "net.minecraft.data.tags.TagsProvider$TagAppender" {
import {$TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagBuilder} from "net.minecraft.tags.TagBuilder"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List$$Type} from "java.util.List"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ITagAppenderExtension$$Interface} from "net.neoforged.neoforge.common.extensions.ITagAppenderExtension"

export class $TagsProvider$TagAppender<T> implements $ITagAppenderExtension$$Interface<(T)> {
public "getInternalBuilder"(): $TagBuilder
public "addOptional"(arg0: $ResourceLocation$$Type): $TagsProvider$TagAppender<(T)>
public "addOptionalTag"(arg0: $ResourceLocation$$Type): $TagsProvider$TagAppender<(T)>
/**
 * 
 * @deprecated
 */
public "getModID"(): StringJS
public "add"(arg0: $ResourceKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "add"(arg0: $TagEntry$$Type): $TagsProvider$TagAppender<(T)>
public "add"(...arg0: ($ResourceKey$$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
public "addAll"(arg0: $List$$Type<($ResourceKey$$Type<(T)>)>): $TagsProvider$TagAppender<(T)>
public "addTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "addTags"(...arg0: ($TagKey$$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
public "addOptionalTags"(...arg0: ($TagKey$$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
public "addOptionalTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "remove"(arg0: $ResourceLocation$$Type, ...arg1: ($ResourceLocation$$Type)[]): $TagsProvider$TagAppender<(T)>
public "remove"(arg0: $ResourceKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "remove"(arg0: $ResourceKey$$Type<(T)>, ...arg1: ($ResourceKey$$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
public "remove"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "remove"(arg0: $TagKey$$Type<(T)>, ...arg1: ($TagKey$$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
public "remove"(arg0: $ResourceLocation$$Type): $TagsProvider$TagAppender<(T)>
public "replace"(): $TagsProvider$TagAppender<(T)>
public "replace"(arg0: boolean): $TagsProvider$TagAppender<(T)>
get "internalBuilder"(): $TagBuilder
get "modID"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsProvider$TagAppender$$Type<T> = ($TagsProvider$TagAppender<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagsProvider$TagAppender$$Original<T> = $TagsProvider$TagAppender<(T)>;}
