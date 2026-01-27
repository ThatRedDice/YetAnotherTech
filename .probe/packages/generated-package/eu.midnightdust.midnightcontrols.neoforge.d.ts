declare module "eu.midnightdust.midnightcontrols.neoforge.event.PlayerChangeControlsModeEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ControlsMode$$Type} from "eu.midnightdust.midnightcontrols.ControlsMode"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $PlayerChangeControlsModeEvent extends $Event implements $IModBusEvent$$Interface {
constructor(player: $Player$$Type, controlsMode: $ControlsMode$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChangeControlsModeEvent$$Type = ($PlayerChangeControlsModeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerChangeControlsModeEvent$$Original = $PlayerChangeControlsModeEvent;}
