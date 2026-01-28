declare module "com.chaosthedude.explorerscompass.items.ExplorersCompassItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompassState, $CompassState$$Type} from "com.chaosthedude.explorerscompass.util.CompassState"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ExplorersCompassItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "NAME": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "setSearching"(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Player$$Type): void
public "setFound"(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "setDisplayCoordinates"(arg0: $ItemStack$$Type, arg1: boolean): void
public "setNotFound"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "getDistanceToBiome"(arg0: $Player$$Type, arg1: $ItemStack$$Type): integer
public "succeed"(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): void
public "setInactive"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "setSearchRadius"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Player$$Type): void
public "setSamples"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Player$$Type): void
public "getSearchRadius"(arg0: $ItemStack$$Type): integer
public "getSamples"(arg0: $ItemStack$$Type): integer
public "shouldDisplayCoordinates"(arg0: $ItemStack$$Type): boolean
public "getFoundStructureX"(arg0: $ItemStack$$Type): integer
public "getFoundStructureZ"(arg0: $ItemStack$$Type): integer
public "searchForStructure"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ResourceLocation$$Type, arg3: $List$$Type<($ResourceLocation$$Type)>, arg4: $BlockPos$$Type, arg5: $ItemStack$$Type): void
public "setFoundStructureX"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Player$$Type): void
public "setFoundStructureZ"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Player$$Type): void
public "setStructureKey"(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Player$$Type): void
public "getStructureKey"(arg0: $ItemStack$$Type): $ResourceLocation
public "getState"(arg0: $ItemStack$$Type): $CompassState
public "setState"(arg0: $ItemStack$$Type, arg1: $BlockPos$$Type, arg2: $CompassState$$Type, arg3: $Player$$Type): void
public "fail"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isActive"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplorersCompassItem$$Type = ($ExplorersCompassItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplorersCompassItem$$Original = $ExplorersCompassItem;}
