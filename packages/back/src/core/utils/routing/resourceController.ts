import BaseResource from "../../resources/BaseResource";

const resourceController = (
  resource: BaseResource<any>,
  transformer = (m) => m,
  includeWhiteList = []
) => {
  const index = async (req, res) => {
    const response = await resource.findManyPaginated();

    return res.json(response);
  };

  const show = async (req, res) => {
    const response = await resource.findById(req.params.id);
    return res.json(response);
  };

  const create = async () => {};

  const update = async () => {};

  const destroy = async (req, res) => {
    const response = await resource.destroyById(req.params.id);
    return res.json(response);
  };

  return { index, show, create, update, destroy };
};

export default resourceController;
