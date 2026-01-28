declare module "com.hrznstudio.titanium.module.BlockWithTile" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Record} from "java.lang.Record"

export class $BlockWithTile extends $Record implements $ItemLike$$Interface {
constructor(block: $DeferredHolder$$Type<($Block$$Type), ($Block$$Type)>, type: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(never)>)>)

public "asItem"(): $Item
public "getBlock"(): $Block
public "type"(): $DeferredHolder<($BlockEntityType<(never)>), ($BlockEntityType<(never)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "block"(): $DeferredHolder<($Block), ($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithTile$$Type = ({"block"?: $DeferredHolder$$Type<($Block$$Type), ($Block$$Type)>, "type"?: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(never)>)>}) | ([block?: $DeferredHolder$$Type<($Block$$Type), ($Block$$Type)>, type?: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockWithTile$$Original = $BlockWithTile;}
declare module "com.hrznstudio.titanium.module.DeferredRegistryHelper" {
import {$BasicBlock$$Type} from "com.hrznstudio.titanium.block.BasicBlock"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DeferredRegister} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$BlockWithTile} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DeferredRegistryHelper {
constructor(arg0: StringJS)

public "addRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $DeferredRegister<(T)>
public "registerBlockWithItem"(arg0: StringJS, arg1: $Supplier$$Type<($Block$$Type)>, arg2: $Function$$Type<($DeferredHolder<($Block), ($Block)>), ($Supplier$$Type<($Item$$Type)>)>, arg3: $TitaniumTab$$Type): $DeferredHolder<($Block), ($Block)>
public "registerBlockWithItem"(arg0: StringJS, arg1: $Supplier$$Type<($BasicBlock$$Type)>, arg2: $TitaniumTab$$Type): $DeferredHolder<($Block), ($Block)>
public "registerBlockEntityType"(arg0: StringJS, arg1: $Supplier$$Type<($BlockEntityType$$Type<(never)>)>): $DeferredHolder<($BlockEntityType<(never)>), ($BlockEntityType<(never)>)>
public "registerEntityType"(arg0: StringJS, arg1: $Supplier$$Type<($EntityType$$Type<(never)>)>): $Holder<($EntityType<(never)>)>
public "getRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $DeferredRegister<(T)>
public "registerCapabilities"(arg0: $Holder$$Type<($BlockEntityType<(never)>)>): void
public "registerBlockWithTileItem"(arg0: StringJS, arg1: $Supplier$$Type<($BasicTileBlock$$Type<(never)>)>, arg2: $Function$$Type<($DeferredHolder<($Block), ($Block)>), ($Supplier$$Type<($Item$$Type)>)>, arg3: $TitaniumTab$$Type): $BlockWithTile
public "registerGeneric"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: StringJS, arg2: $Supplier$$Type<(T)>): $DeferredHolder<(T), (T)>
public "registerTyped"<T, R>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: StringJS, arg2: $Supplier$$Type<(R)>): $DeferredHolder<(T), (R)>
public "registerBlockWithTile"(arg0: StringJS, arg1: $Supplier$$Type<($BasicTileBlock$$Type<(never)>)>, arg2: $TitaniumTab$$Type): $BlockWithTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegistryHelper$$Type = ($DeferredRegistryHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredRegistryHelper$$Original = $DeferredRegistryHelper;}
