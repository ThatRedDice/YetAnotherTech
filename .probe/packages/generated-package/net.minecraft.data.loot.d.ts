declare module "net.minecraft.data.loot.LootTableProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootTableProvider$SubProviderEntry, $LootTableProvider$SubProviderEntry$$Type} from "net.minecraft.data.loot.LootTableProvider$SubProviderEntry"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$DataProvider$$Interface} from "net.minecraft.data.DataProvider"
import {$Set$$Type} from "java.util.Set"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"

export class $LootTableProvider implements $DataProvider$$Interface {
constructor(arg0: $PackOutput$$Type, arg1: $Set$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>, arg2: $List$$Type<($LootTableProvider$SubProviderEntry$$Type)>, arg3: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "getTables"(): $List<($LootTableProvider$SubProviderEntry)>
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
get "tables"(): $List<($LootTableProvider$SubProviderEntry)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableProvider$$Type = ($LootTableProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableProvider$$Original = $LootTableProvider;}
declare module "net.minecraft.data.loot.packs.VanillaEntityLoot" {
import {$EntityLootSubProvider} from "net.minecraft.data.loot.EntityLootSubProvider"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $VanillaEntityLoot extends $EntityLootSubProvider {
constructor(arg0: $HolderLookup$Provider$$Type)

public "elderGuardianLootTable"(): $LootTable$Builder
public "generate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaEntityLoot$$Type = ($VanillaEntityLoot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaEntityLoot$$Original = $VanillaEntityLoot;}
declare module "net.minecraft.data.loot.LootTableSubProvider" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootTableSubProvider$$Interface {

(arg0: $BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}

export class $LootTableSubProvider implements $LootTableSubProvider$$Interface {
 "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableSubProvider$$Type = ((arg0: $BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableSubProvider$$Original = $LootTableSubProvider;}
declare module "net.minecraft.data.loot.BlockLootSubProvider" {
import {$LootItemCondition$Builder} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootTableSubProvider$$Interface} from "net.minecraft.data.loot.LootTableSubProvider"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockLootSubProviderAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.BlockLootSubProviderAccessor"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export class $BlockLootSubProvider implements $LootTableSubProvider$$Interface, $BlockLootSubProviderAccessor$$Interface {
public "create$hasSilkTouch"(): $LootItemCondition$Builder
public "createSingleItemTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public static "noDrop"(): $LootTable$Builder
public "createAttachedStemDrops"(arg0: $Block$$Type, arg1: $Item$$Type): $LootTable$Builder
public "createStemDrops"(arg0: $Block$$Type, arg1: $Item$$Type): $LootTable$Builder
public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLootSubProvider$$Type = ($BlockLootSubProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockLootSubProvider$$Original = $BlockLootSubProvider;}
declare module "net.minecraft.data.loot.packs.VanillaBlockLoot" {
import {$BlockLootSubProvider} from "net.minecraft.data.loot.BlockLootSubProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $VanillaBlockLoot extends $BlockLootSubProvider {
constructor(arg0: $HolderLookup$Provider$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaBlockLoot$$Type = ($VanillaBlockLoot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaBlockLoot$$Original = $VanillaBlockLoot;}
declare module "net.minecraft.data.loot.LootTableProvider$SubProviderEntry" {
import {$LootTableSubProvider, $LootTableSubProvider$$Type} from "net.minecraft.data.loot.LootTableSubProvider"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $LootTableProvider$SubProviderEntry extends $Record {
constructor(provider: $Function$$Type<($HolderLookup$Provider), ($LootTableSubProvider$$Type)>, paramSet: $LootContextParamSet$$Type)

public "paramSet"(): $LootContextParamSet
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "provider"(): $Function<($HolderLookup$Provider), ($LootTableSubProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableProvider$SubProviderEntry$$Type = ({"provider"?: $Function$$Type<($HolderLookup$Provider$$Type), ($LootTableSubProvider$$Type)>, "paramSet"?: $LootContextParamSet$$Type}) | ([provider?: $Function$$Type<($HolderLookup$Provider$$Type), ($LootTableSubProvider$$Type)>, paramSet?: $LootContextParamSet$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableProvider$SubProviderEntry$$Original = $LootTableProvider$SubProviderEntry;}
