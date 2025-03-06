import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { FaRegCalendarAlt } from "react-icons/fa";
import usericon from "@/assets/images/user.png";
import moment from "moment";
import { Link } from "react-router-dom";
import { RouteBlogDetails } from "@/helpers/RouteName";

const BlogCard = ({ props }) => {
  return (
    <Link to={RouteBlogDetails(props.category.slug, props.slug)}>
      <Card className="pt-5">
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <Avatar>
                <AvatarImage src={props.author?.avatar || usericon} />
              </Avatar>
              <span>{props.author?.name || "Unknown Author"}</span>
            </div>
            {props.author?.role === "admin" && (
              <Badge variant="outline" className="bg-primary">
                Admin
              </Badge>
            )}
          </div>

          {/*featured image*/}
          <div className="my-2">
            <img src={props.featuredImage} className="rounded" alt={props.title} />
          </div>

          {/*date*/}
          <div>
            <p className="flex items-center gap-2 mb-2">
              <FaRegCalendarAlt />
              <span>{moment(props.createdAt).format("DD-MM-YYYY")}</span>
            </p>
            <h2 className="text-2xl font-bold line-clamp-2">{props.title}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;